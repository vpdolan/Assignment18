function ElixirTemplate(data) {

  return `
  <li>This enjoyable bourbon, ${data.Name} is ${data.price} and is manufactured at the fabulous ${data.distiller} distillery.  It is a terrific sipper. I give it a rating of ${data.rating}</li>`;
}

export default ElixirTemplate;