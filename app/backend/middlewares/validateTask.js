export const validateTaskExists = async (req, res, next) => {
  const { task } = req.body;
  if (!task) {
    return res.status(400).json({ message: 'Task is required' });
  }

  return next();
};

export const validateTaskLength = async (req, res, next) => {
  const { task } = req.body;
  if (task && task.length > 30) {
    return res.status(400).json({ message: 'Task length should be max 30' });
  }

  return next();
};
