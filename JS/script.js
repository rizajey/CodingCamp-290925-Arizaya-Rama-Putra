// Ambil elemen
const todoInput = document.getElementById("todo");
const dateInput = document.getElementById("date");
const taskTable = document.getElementById("taskTable");

// Validasi form
function validateForm(event) {
  event.preventDefault(); // cegah reload form

  const todo = todoInput.value.trim();
  const date = dateInput.value;

  if (todo === "") {
    alert("Isi todo dulu!");
    return false;
  }

  const todoRegex = /^[A-Za-z\s]+$/;

    if (!todoRegex.test(todo)) {
        alert("invalid name format");
        return false;
    }

    if (date === "") {
        alert("Please select a due date!");
        return false;
    }

  // Tambahkan task ke tabel
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${todo}</td>
    <td>${date || "-"}</td>
    <td>Pending</td>
    <td><button onclick="deleteTask(this)">Delete</button></td>
  `;

  // Hapus pesan "No task found" kalau ada
  if (taskTable.querySelector(".no-task")) {
    taskTable.innerHTML = "";
  }

  taskTable.appendChild(row);

  // kosongkan input setelah submit
  todoInput.value = "";
  dateInput.value = "";

  return false;
}

// Fungsi delete 1 task
function deleteTask(button) {
  const row = button.parentElement.parentElement;
  row.remove();

  // Kalau tabel kosong, tampilkan pesan
  if (taskTable.rows.length === 0) {
    taskTable.innerHTML = `
      <tr><td colspan="4" class="no-task">No task found</td></tr>
    `;
  }
}

// Fungsi delete input (sesuai permintaanmu)
function deleteAll() {
  todoInput.value = "";
  dateInput.value = "";
}

// Placeholder untuk filter (nanti bisa dikembangkan)
function filterTasks() {
  alert("Filter belum diimplementasi");
}
