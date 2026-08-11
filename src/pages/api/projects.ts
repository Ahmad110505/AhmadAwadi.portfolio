import type { APIRoute } from 'astro';
import fs from 'node:fs';
import path from 'node:path';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();

    if (!data || !data.title) {
      return new Response(JSON.stringify({ error: 'Title is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const id = data.id || `proj-${Date.now()}`;
    const filePath = path.join(process.cwd(), 'content', 'projects', `${id}.json`);

    const projectContent = {
      id: id,
      title: data.title,
      description: data.description || '',
      technologies: Array.isArray(data.technologies) 
        ? data.technologies 
        : (data.technologies || '').split(',').map((t: string) => t.trim()).filter(Boolean),
      image: data.image || '',
      github: data.github || '',
      demo: data.demo || '',
      featured: data.featured || false,
    };

    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, JSON.stringify(projectContent, null, 2), 'utf-8');

    return new Response(JSON.stringify({ success: true, project: projectContent }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

export const DELETE: APIRoute = async ({ request }) => {
  try {
    const { id } = await request.json();
    if (!id) {
      return new Response(JSON.stringify({ error: 'Project ID is required' }), { status: 400 });
    }
    const filePath = path.join(process.cwd(), 'content', 'projects', `${id}.json`);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
};
