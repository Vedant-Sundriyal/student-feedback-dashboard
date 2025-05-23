const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5001;

// Supabase setup
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

app.use(cors());
app.use(express.json());

// GET /feedback - fetch all feedback
app.get('/feedback', async (req, res) => {
  const { data, error } = await supabase
    .from('feedback')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) return res.status(500).json({ error });
  res.json(data);
});

// POST /feedback - submit new feedback
app.post('/feedback', async (req, res) => {
  const { message, college, professor } = req.body;

  if (!message || !college || !professor) {
    return res.status(400).json({ error: 'Missing fields' });
  }

  const { data, error } = await supabase
    .from('feedback')
    .insert([{ message, college, professor }]);

  if (error) return res.status(500).json({ error });
  res.status(201).json(data);
});

// DELETE /feedback/:id - delete feedback by ID
app.delete('/feedback/:id', async (req, res) => {
  const { id } = req.params;

  const { error } = await supabase
    .from('feedback')
    .delete()
    .eq('id', id);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.status(200).json({ message: 'Feedback deleted successfully' });
});

app.listen(port, () => {
  console.log(`✅ Express server listening at http://localhost:${port}`);
});
