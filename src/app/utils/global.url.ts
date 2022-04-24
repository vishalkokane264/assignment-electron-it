let baseUrl = 'https://reqres.in/api';
export class GlobalUrl {
  public static readonly user = `${baseUrl}/users`;
  public static readonly deleteByUserId = `${baseUrl}/users/{userId}`;
}
