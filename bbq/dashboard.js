document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('orderForm');
    const tableBody = document.getElementById('orderTableBody');
  
    form.addEventListener('submit', function(e) {
      e.preventDefault();
  
      const name = document.getElementById('customerName').value.trim();
      const item = document.getElementById('item').value.trim();
      const quantity = document.getElementById('quantity').value;
  
      if (name === '' || item === '' || quantity < 1) {
        alert('Please fill out all fields correctly.');
        return;
      }
  
      addOrderToTable(name, item, quantity);
      form.reset();
    });
  
    function addOrderToTable(name, item, quantity) {
      const row = document.createElement('tr');
  
      row.innerHTML = `
        <td>${name}</td>
        <td>${item}</td>
        <td>${quantity}</td>
        <td><button class="delete-btn">Delete</button></td>
      `;
  
      row.querySelector('.delete-btn').addEventListener('click', () => {
        row.remove();
      });
  
      tableBody.appendChild(row);
    }
  });
  