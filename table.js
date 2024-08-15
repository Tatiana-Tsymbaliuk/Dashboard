const customers = [
  {
    name: "Jane Cooper",
    company: "Microsoft",
    phone: "(225) 555-0118",
    email: "jane@microsoft.com",
    country: "United States",
    status: "Active",
  },
  {
    name: "Floyd Miles",
    company: "Yahoo",
    phone: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: "Inactive",
  },
  {
    name: "Ronald Richards",
    company: "Adobe",
    phone: "(302) 555-0107",
    email: "ronald@adobe.com",
    country: "Israel",
    status: "Inactive",
  },
  {
    name: "Marvin McKinney",
    company: "Tesla",
    phone: "(252) 555-0126",
    email: "marvin@tesla.com",
    country: "Iran",
    status: "Active",
  },
  {
    name: "Jerome Bell",
    company: "Google",
    phone: "(629) 555-0129",
    email: "jerome@google.com",
    country: "Réunion",
    status: "Active",
  },
  {
    name: "Kathryn Murphy",
    company: "Microsoft",
    phone: "(406) 555-0120",
    email: "kathryn@microsoft.com",
    country: "Curaçao",
    status: "Active",
  },
  {
    name: "Jacob Jones",
    company: "Yahoo",
    phone: "(208) 555-0112",
    email: "jacob@yahoo.com",
    country: "Brazil",
    status: "Active",
  },
  {
    name: "Kristin Watson",
    company: "Facebook",
    phone: "(704) 555-0127",
    email: "kristin@facebook.com",
    country: "Åland Islands",
    status: "Inactive",
  },
];

const tableBody = document.getElementById("customers-table-body");

customers.forEach((customer) => {
  const row = document.createElement("tr");
  row.classList.add("customers__table-row");

  row.innerHTML = `
    <td class="customers__table-cell">${customer.name}</td>
    <td class="customers__table-cell">${customer.company}</td>
    <td class="customers__table-cell">${customer.phone}</td>
    <td class="customers__table-cell">${customer.email}</td>
    <td class="customers__table-cell">${customer.country}</td>
    <td class="customers__table-cell">
      <span class="customers__table-cell--status customers__table-cell--status--${customer.status.toLowerCase()}">${
    customer.status
  }</span>
    </td>
  `;

  tableBody.appendChild(row);
});
