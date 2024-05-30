import './style.css'
import { User } from './User';
import { parseToUserClass } from './utils';

const divPrincipal = document.querySelector(".container");

let numeroPaginacion;
const url = `https://reqres.in/api/users?page=${numeroPaginacion}`;

const setUsing = async (numeroPaginacion) => {
  try {
      const response = await fetch(`https://reqres.in/api/users?page=${numeroPaginacion}`);
      if (!response.ok) {
          throw new Error('Error en la llamada a la API');
      }
      const result = await response.json();

      const users = [];
      for (const userObj of result.data) {
          const user = new User(userObj.id);
          const parsedUser = await parseToUserClass(userObj, user);
          users.push(parsedUser);
      }
      
      const table = document.createElement('table');
      table.className = 'table table-dark table-striped';

      const thead = document.createElement('thead');
      const headerRow = document.createElement('tr');
      User.cabecera.forEach(header => {
          const th = document.createElement('th');
          th.scope = 'col';
          th.textContent = header;
          headerRow.appendChild(th);
      });
      thead.appendChild(headerRow);
      table.appendChild(thead);

      const tbody = document.createElement('tbody');

      users.forEach((user, index) => {
          const tr = document.createElement('tr');

          const th = document.createElement('th');
          th.scope = 'row';
          th.textContent = index + 1;
          tr.appendChild(th);

          const tdFirstName = document.createElement('td');
          tdFirstName.textContent = user.first_name;
          tr.appendChild(tdFirstName);

          const tdLastName = document.createElement('td');
          tdLastName.textContent = user.last_name;
          tr.appendChild(tdLastName);

          const tdEmail = document.createElement('td');
          tdEmail.textContent = user.email;
          tr.appendChild(tdEmail);

          tbody.appendChild(tr);
      });

      table.appendChild(tbody);
      
      divPrincipal.appendChild(table);
      createBoton(divPrincipal);
      
  } catch (error) {
      console.error(error);
  }
};
numeroPaginacion == 1;
setUsing(numeroPaginacion);

const createBoton = (divPrincipal) => {
      const divPaginacion = document.createElement("div");
      divPaginacion.className = "container-pagination";

      const boton1 = document.createElement("button");
      boton1.className = "btn btn-primary";
      boton1.textContent = "<<<";

      const boton2 = document.createElement("button");
      boton2.className = "btn btn-primary";
      boton2.textContent = ">>>";
      boton1.disabled = true;
      divPaginacion.appendChild(boton1);
      divPaginacion.appendChild(boton2);
      divPrincipal.appendChild(divPaginacion);

      boton1.addEventListener(("click"), async() => {
        try {
          numeroPaginacion == 1;
          const response = await fetch(`https://reqres.in/api/users?page=${1}`);
          const result = await response.json();
          console.log(result);
          setUsing(numeroPaginacion);
        } catch (error) {
          console.error(error);
        }
        boton2.disabled = false;
      });
      boton2.addEventListener(("click"), async() => {
        try {
          numeroPaginacion++;
          const response = await fetch(`https://reqres.in/api/users?page=${2}`);
          const result = await response.json();
          console.log(result);
          numeroPaginacion++;
          setUsing(numeroPaginacion);
          boton2.disabled = true;
        } catch (error) {
          console.error(error);
        }
        boton1.disabled = false;
      });
      
        

};




