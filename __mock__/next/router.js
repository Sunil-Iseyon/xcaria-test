const useRouter = jest.spyOn(require('next/router'), 'useRouter');

const mockRouter = {
  push: jest.fn(),
  prefetch: jest.fn().mockResolvedValue(),
  route: '/',
  pathname: '/',
  query: {},
  asPath: '/',
  events: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn(),
  },
  beforePopState: jest.fn(() => null),
  isFallback: false,
};

useRouter.mockReturnValue(mockRouter);

module.exports = mockRouter;
