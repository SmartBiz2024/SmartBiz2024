/*هنا قائمة ب بيانات الموظفين*/
  document.addEventListener('DOMContentLoaded', function() {
    const addEmployeeBtn = document.getElementById('add-employee-btn');
    const newEmployeeForm = document.getElementById('new-employee-form');
    const addBtn = document.getElementById('add-btn');
    const employeeList = document.getElementById('employee-list');
  
    addEmployeeBtn.addEventListener('click', function() {
      newEmployeeForm.style.display = 'block';
    });
  
    addBtn.addEventListener('click', function() {
      addNewEmployee();
    });
  
    function addNewEmployee() {
      const nameInput = document.getElementById('new-employee-name-input');
      const specializationInput = document.getElementById('new-employee-specialization-input');
      const ageInput = document.getElementById('new-employee-age-input');
      const genderInput = document.getElementById('new-employee-gender-input');
      const imageInput = document.getElementById('new-employee-image-input');
  
      const name = nameInput.value;
      const specialization = specializationInput.value;
      const age = ageInput.value;
      const gender = genderInput.value;
      const imageFile = imageInput.files[0];
  
      const newEmployeeBox = document.createElement('div');
      newEmployeeBox.classList.add('employee-box');
  
      const employeeDetails = document.createElement('div');
      employeeDetails.classList.add('employee-details');
  
      
      const nameElement = document.createElement('h2');
      nameElement.classList.add('employee-name');
      nameElement.textContent = `Specialization:${name}`;
  
      const specializationElement = document.createElement('p');
      specializationElement.classList.add('employee-specialization');
      specializationElement.textContent = `Specialization:${specialization}`;
  
      const ageElement = document.createElement('p');
      ageElement.classList.add('employee-age');
      ageElement.textContent = `age: ${age}`;
  
      const genderElement = document.createElement('p');
      genderElement.classList.add('employee-gender');
      genderElement.textContent = `gender: ${gender}`;
  
  
      const imageElement = document.createElement('img');
      imageElement.classList.add('employee-image');
      imageElement.src = URL.createObjectURL(imageFile);
  
      employeeDetails.appendChild(nameElement);
      employeeDetails.appendChild(specializationElement);
      employeeDetails.appendChild(ageElement);
      employeeDetails.appendChild(genderElement);
      employeeDetails.appendChild(imageElement);
      newEmployeeBox.appendChild(employeeDetails);
      employeeList.appendChild(newEmployeeBox);
  
      nameInput.value = '';
      specializationInput.value = '';
      ageInput.value = '';
      genderInput.value = '';
      imageInput.value = '';
      newEmployeeForm.style.display = 'none';
    }
  });