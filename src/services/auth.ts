interface IResponse {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export function signIn(): Promise<IResponse> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'hfsjkdfjsdfg4685gfsd65g4dfs6+5g4sdf65',
        user: {
          name: 'Elton',
          email: 'elton989@hotmail.com',
        },
      });
    }, 500);
  });
}
