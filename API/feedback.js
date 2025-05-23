const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

module.exports = async (req, res) => {
  if (req.method === 'GET') {
    // Fetch all feedback
    const { data, error } = await supabase
      .from('feedback')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) return res.status(500).json({ error });
    return res.status(200).json(data);
  } 
  else if (req.method === 'POST') {
    // Submit new feedback
    const { message, college, professor } = req.body;

    if (!message || !college || !professor) {
      return res.status(400).json({ error: 'Missing fields' });
    }

    const { data, error } = await supabase
      .from('feedback')
      .insert([{ message, college, professor }]);

    if (error) return res.status(500).json({ error });
    return res.status(201).json(data);
  } 
  else {
    // Method not allowed
    res.setHeader('Allow', ['GET', 'POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};