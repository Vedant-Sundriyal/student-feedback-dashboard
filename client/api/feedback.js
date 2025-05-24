// api/feedback.js
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { data, error } = await supabase
      .from('feedback')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) return res.status(500).json({ error });
    return res.status(200).json(data);

  } else if (req.method === 'POST') {
    const { message, college, professor } = req.body;

    if (!message || !college || !professor) {
      return res.status(400).json({ error: 'Missing fields' });
    }

    const { data, error } = await supabase
      .from('feedback')
      .insert([{ message, college, professor }]);

    if (error) return res.status(500).json({ error });
    return res.status(201).json(data);

  } else if (req.method === 'DELETE') {
    const { id } = req.query;

    if (!id) {
      return res.status(400).json({ error: 'Missing id parameter' });
    }

    const { error } = await supabase
      .from('feedback')
      .delete()
      .eq('id', id);

    if (error) return res.status(500).json({ error });
    return res.status(200).json({ message: 'Feedback deleted successfully' });

  } else {
    res.setHeader('Allow', ['GET', 'POST', 'DELETE']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
