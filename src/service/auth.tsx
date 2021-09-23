export function signIn(): Promise<Response> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: 'ey354lnsxlkcngdsiiuqht9NFIDSNFJdoidfsamnj438nflkj',
        user: {
          name: 'Foo Bar',
          email: 'foo@bar.com',
        },
      });
    }, 1000);
  });
}

export interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
}
