import axios from 'axios';


// Función para obtener los datos
export const getPost = async (id: number): Promise<String> => {
  try {
    const response = await axios.get<Object>(`https://api.chucknorris.io/jokes/random`);
    return response.data.value;
  } catch (error) {
    throw new Error(`Error al obtener el post: ${error}`);
  }
};