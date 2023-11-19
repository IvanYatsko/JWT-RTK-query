import { UserUser } from "./User.model";

export const PAGE = 1;
export const PHOTOS_ON_PAGE = 12;

export const UNKNOWN_USER = "Unknown user";

export const TOKEN =
  "eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJzZWxmIiwic3ViIjoidXNlciIsImV4cCI6MTYwNDA0MzA1MSwiaWF0IjoxNjA0MDA3MDUxfQ.yDF_JgSwl5sk21CF7AE1AYbYzRd5YYqe3MIgSWpgN0t2UqsjaaEDhmmICKizt-_0iZy8nkEpNnvgqv5bOHDhs7AXlYS1pg8dgPKuyfkhyVIKa3DhuGyb7tFjwJxHpr128BXf1Dbq-p7Njy46tbKsZhP5zGTjdXlqlAhR4Bl5Fxaxr7D0gdTVBVTlUp9DCy6l-pTBpsvHxShkjXJ0GHVpIZdB-c2e_K9PfTW5MDPcHekG9djnWPSEy-fRvKzTsyVFhdy-X3NXQWWkjFv9bNarV-bhxMlzqhujuaeXJGEqUZlkhBxTsqFr1N7XVcmhs3ECdjEyun2fUSge4BoC7budsQ";

  export const USERS = [
    {
      username: "Admin",
      password: "admin",
      role: UserUser.ADMINISTRATOR,
      id: "fa7dbc9c-8842-4de0-926e-02605f9da6d8",
    },
    {
      username: "Ivan",
      password: "12345",
      role: UserUser.USER,
      id: "79bf80ce-cb05-468b-9362-9fd95f244e07",
    },
    {
      username: "Vlad",
      password: "01234",
      role: UserUser.USER,
      id: "7319a8fa-7b60-40ed-9096-a4da0093e51a",
    },
  ];

  export const LOGIN_ERROR = 'Incorrect login or password. Try again.';