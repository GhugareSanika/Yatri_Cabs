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
