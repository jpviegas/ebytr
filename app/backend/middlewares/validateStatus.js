export const validateStatusExists = async (req, res, next) => {
  const { status } = req.body;
  if (!status) {
    return res.status(400).json({ message: 'Status is required' });
  }

  return next();
};

export const validateStatusLength = async (req, res, next) => {
  const { status } = req.body;
  if (status && status.length > 15) {
    return res.status(400).json({ message: 'Status length should be max 15' });
  }

  return next();
};

export const validateStatus = async (req, res, next) => {
  const { status } = req.body;
  if ((status !== 'pendente') && (status !== 'em andamento') && (status !== 'pronto')) {
    return res.status(400).json({ message: 'Incorrect status' });
  }

  return next();
};
