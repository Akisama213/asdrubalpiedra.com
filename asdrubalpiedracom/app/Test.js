// Importa la biblioteca de Google API Client
import { auth, photos } from 'googleapis';

// Define las variables de configuración
const projectId = 'asdrubalpiedracom';
const clientId = '1059496084402-5153ktkjhpoacbjit0p8l1k4gc6g6nks.apps.googleusercontent.com';
const clientSecret = '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';

// Obtiene las credenciales
const credentials = auth.credentials.getClientCredentials(projectId, clientId, clientSecret);

// Actualiza el token de acceso
const accessToken = auth.transport.requests.refreshToken(
  credentials.refreshToken,
  projectId,
  clientId,
  clientSecret
);

// Crea la solicitud
const albumsRequest = new photos.v1.MediaItems().list();

// Agrega el encabezado Authorization
albumsRequest.headers['Authorization'] = 'Bearer ' + accessToken;

// Ejecuta la solicitud
const albumsResponse = albumsRequest.execute();

// Imprime los álbumes
console.log(albumsResponse.items);