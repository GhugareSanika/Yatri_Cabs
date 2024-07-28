// document.addEventListener('DOMContentLoaded', function() {
//     const destination = document.querySelector('.destination');
//     const fromToSection = `
//         <div class="from-to">
//             <div class="from">
//                 FROM
//                 <div class="input-container">
//                     <input type="text" class="input-field">
//                     <div class="delete-img"></div>
//                 </div>
//             </div>
//             <div class="compare-arrow-img"></div>
//             <div class="to">
//                 TO
//                 <div class="input-container">
//                     <input type="text" class="input-field">
//                     <div class="location-img"></div>
//                 </div>
//             </div>
//         </div>
//     `;

//     const pickupSection = `
//         <div class="pickup-section">
//             <div class="pickup">
//                 PICKUP AT
//                 <div class="input-container">
//                     <input type="text" class="input-field">
//                     <div class="clock-img"></div>
//                 </div>
//             </div>
//             <div class="pickup-date">
//                 PICK UP DATE
//                 <div class="input-container">
//                     <input type="date" class="input-field">
//                 </div>
//             </div>
//         </div>
//     `;

//     const returnDateSection = `
//         <div class="pickup-date">
//             RETURN DATE
//             <div class="input-container">
//                 <input type="date" class="input-field">
//             </div>
//         </div>
//     `;

//     const localSection = `
//         <div class="from-to">
//             <div class="from">
//                 PICKUP CITY
//                 <div class="input-container">
//                     <input type="text" class="input-field">
//                     <div class="delete-img"></div>
//                 </div>
//             </div>
//             <div class="pickup">
//                 PICKUP AT
//                 <div class="input-container">
//                     <input type="text" class="input-field">
//                     <div class="clock-img"></div>
//                 </div>
//             </div>
//         </div>
//     `;

//     const buttons = document.querySelectorAll('.toggle-input');
//     buttons.forEach(button => {
//         button.addEventListener('change', () => {
//             let activeButtons = Array.from(buttons).filter(btn => btn.checked).map(btn => btn.id);

//             destination.innerHTML = ''; // Clear the destination

//             if (activeButtons.includes('local')) {
//                 destination.innerHTML = localSection;
//             } else if (activeButtons.includes('outstation') && activeButtons.includes('one-way')) {
//                 destination.innerHTML = fromToSection + pickupSection;
//             } else if (activeButtons.includes('outstation') && activeButtons.includes('round-trip')) {
//                 destination.innerHTML = fromToSection + pickupSection + returnDateSection;
//             } else if (activeButtons.includes('airport')) {
//                 destination.innerHTML = fromToSection + pickupSection;
//             }
//         });
//     });
// });





// document.addEventListener('DOMContentLoaded', function () {
//     const checkboxes = document.querySelectorAll('.toggle-input');
//     const secondRow = document.querySelector('.button-row2');
//     const exploreCabsButton = document.querySelector('.cab-button');
    
//     checkboxes.forEach(checkbox => {
//         checkbox.addEventListener('change', function () {
//             if (this.checked) {
//                 checkboxes.forEach(box => {
//                     if (box !== this) {
//                         box.checked = false;
//                     }
//                 });

//                 // Hide the second row if "Local" or "Airport" is checked
//                 if (this.id === 'local' || this.id === 'airport') {
//                     secondRow.style.display = 'none';
//                 } else {
//                     secondRow.style.display = 'flex';
//                 }
//                 exploreCabsButton.style.display = 'block';
//             } else {
//                 secondRow.style.display = 'flex';
//                 exploreCabsButton.style.display = 'none';
//             }
//         });
//     });

//     // Example function for handling form submission
//     exploreCabsButton.querySelector('button').addEventListener('click', function (event) {
//         const fromLocation = document.querySelector('.from .input-field').value;
//         const toLocation = document.querySelector('.to .input-field').value;
//         const pickupTime = document.querySelector('.pickup .input-field').value;
//         const pickupDate = document.querySelector('.pickup-date .input-field').value;

//         console.log(`From: ${fromLocation}, To: ${toLocation}, Pickup Time: ${pickupTime}, Pickup Date: ${pickupDate}`);
        
//         event.preventDefault();
//     });

//     // Initialize the "Explore Cabs" button to be hidden
//     exploreCabsButton.style.display = 'none';
// });




document.addEventListener('DOMContentLoaded', function () {
    const firstRowCheckboxes = document.querySelectorAll('.button-row .toggle-input');
    const secondRowCheckboxes = document.querySelectorAll('.button-row2 .toggle-input');
    const secondRow = document.querySelector('.button-row2');
    const exploreCabsButton = document.querySelector('.cab-button');
    const destinationSection = document.querySelector('.destination');
    const returnDateSection = document.querySelector('.return-date');

    const handleFirstRowChange = function () {
        if (this.checked) {
            firstRowCheckboxes.forEach(box => {
                if (box !== this) {
                    box.checked = false;
                }
            });
    
            if (this.id === 'local') {
                // Show only the Local-related sections
                document.querySelector('.pickup-city').style.display = 'flex';
                document.querySelector('.pickup').style.display = 'flex';
                document.querySelector('.pickup-date').style.display = 'flex';
                document.querySelector('.return-date').style.display = 'none';
                document.querySelector('.from-to').style.display = 'none';
                document.querySelector('.button-row2').style.display = 'none';
                exploreCabsButton.style.display = 'block';
            } else if (this.id === 'airport') {
                // Show only the Airport-related sections
                document.querySelector('.pickup-city').style.display = 'none';
                document.querySelector('.pickup').style.display = 'flex';
                document.querySelector('.pickup-date').style.display = 'flex';
                document.querySelector('.return-date').style.display = 'none';
                document.querySelector('.from-to').style.display = 'flex';
                document.querySelector('.button-row2').style.display = 'none';
                exploreCabsButton.style.display = 'block';
            } else {
                // Handle Outstation or other cases
                document.querySelector('.pickup-city').style.display = 'none';
                document.querySelector('.pickup').style.display = 'flex';
                document.querySelector('.pickup-date').style.display = 'flex';
                document.querySelector('.return-date').style.display = 'flex';
                document.querySelector('.from-to').style.display = 'flex';
                document.querySelector('.button-row2').style.display = 'flex';
                exploreCabsButton.style.display = 'block';
            }
        } else {
            // When checkbox is unchecked, reset to default state
            document.querySelector('.pickup-city').style.display = 'none';
            document.querySelector('.pickup').style.display = 'flex';
            document.querySelector('.pickup-date').style.display = 'flex';
            document.querySelector('.return-date').style.display = 'none';
            document.querySelector('.from-to').style.display = 'flex';
            document.querySelector('.button-row2').style.display = 'flex';
            exploreCabsButton.style.display = 'none';
        }
    
        updateDestinationVisibility();
    };
    

    const handleSecondRowChange = function () {
        if (this.checked) {
            secondRowCheckboxes.forEach(box => {
                if (box !== this) {
                    box.checked = false;
                }
            });
            exploreCabsButton.style.display = 'block';
        } else {
            exploreCabsButton.style.display = 'none';
        }

        updateDestinationVisibility();
    };

    const updateDestinationVisibility = function () {
        const isAnyFirstRowChecked = Array.from(firstRowCheckboxes).some(box => box.checked);
        const isAnySecondRowChecked = Array.from(secondRowCheckboxes).some(box => box.checked);

        if (isAnyFirstRowChecked && (secondRow.style.display === 'none' || isAnySecondRowChecked)) {
            destinationSection.style.display = 'block';
        } else {
            destinationSection.style.display = 'none';
        }

        // Show or hide the return date section
        const isOutstationChecked = document.querySelector('#outstation').checked;
        const isRoundTripChecked = document.querySelector('#round-trip').checked;

        if (isOutstationChecked && isRoundTripChecked) {
            returnDateSection.style.display = 'block';
        } else {
            returnDateSection.style.display = 'none';
        }
    };

    firstRowCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', handleFirstRowChange);
    });

    secondRowCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', handleSecondRowChange);
    });

    // Initialize the state to reflect default selections
    updateDestinationVisibility();
});
