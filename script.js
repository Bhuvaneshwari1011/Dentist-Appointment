// Sample appointments array
let appointments = [];

// Function to handle form submission
function submitForm(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const treatment = document.getElementById('treatment').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;

    const appointment = { name, phone, treatment, age, gender };
    appointments.push(appointment);

    displayAppointments();
    document.getElementById('appointmentForm').reset();
    document.getElementById('confirmationMessage').innerText = 'Your appointment has been booked successfully!';
}

// Function to display appointments
function displayAppointments() {
    const tableBody = document.getElementById('appointmentsTable');
    tableBody.innerHTML = ''; // Clear existing data

    appointments.forEach((appointment, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${appointment.name}</td>
            <td>${appointment.phone}</td>
            <td>${appointment.treatment}</td>
            <td>${appointment.age}</td>
            <td>${appointment.gender}</td>
            <td>
                <button class="btn btn-warning btn-sm" onclick="editAppointment(${index})">Edit</button>
                <button class="btn btn-danger btn-sm" onclick="deleteAppointment(${index})">Delete</button>
            </td>
        `;

        tableBody.appendChild(row);
    });
}

// Function to edit an appointment
function editAppointment(index) {
    const appointment = appointments[index];
    document.getElementById('name').value = appointment.name;
    document.getElementById('phone').value = appointment.phone;
    document.getElementById('age').value = appointment.age;
    document.getElementById('gender').value = appointment.gender;
    document.getElementById('treatment').value = appointment.treatment;

    // Remove the appointment from the array
    appointments.splice(index, 1);
    displayAppointments();
}

// Function to delete an appointment
function deleteAppointment(index) {
    appointments.splice(index, 1);
    displayAppointments();
}

// Function to open appointment form modal
function openAppointmentForm() {
    $('#appointmentModal').modal('show');
}

// Initial display
displayAppointments();
