document.addEventListener('DOMContentLoaded', () => {
    $(document).ready(function () {

        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // Functions ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        // Check Answers
        function checkAnswers() {

            let QN = -1; //question counter
            let totalScore = 0; //scrore counter

            //for each question
            $(".question").each(function () {
                QN += 1;
                const selected = $(this).find('input:checked'); //selected
                const correct = $(this).find(`input[value='${keys[QN]}']`); //correct

                //if answer value match the answer in array
                if (parseInt((selected.val())) === keys[QN]) {
                    selected.next().css('color', 'green'); //make green
                    totalScore += parseInt($(this).find('.points').text().charAt(2)); //add scores
                } else {
                    selected.next().css('color', 'red'); //selected red
                    correct.next().css('color', 'blue'); //right blue
                }

            });

            //last question
            if ($('#question5').val().trim().toLowerCase() === keys[4]) {
                $('#question5').css('background-color', 'lightgreen');
                totalScore += parseInt($('#lastQuestion').find('.points').text().charAt(2));
            } else {
                $('#question5').css('background-color', 'lightpink');
                $('#question5').val(`${$('#question5').val()} (${keys[4]})`) //add to string right answer in braces
            }

            $('#score').text(totalScore); //reflect score

            $('input').prop('disabled', true); //disable interface
        }

        // Start Over
        function startOver() {

            //clear all answers from color and checks
            $(".question").each(function () {
                $('span').css('color', 'black');
                $(this).find('input[type="radio"]:checked').prop('checked', false);
            })

            $('#question5').val('').css('background-color', 'white') //clear last question area

            $('#score').text('0'); //reset score

            $('input').prop('disabled', false); //turn on interface
        }

        // Verify
        function verify() {

            if ($('#pswdInput').val() === pswd) {
                $('input, button').prop('disabled', false); //if password match, turn on interface
            } 

            $('#pswdInput').val(''); //clear input area
        }

        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // AddEventListeners /////////////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        $('#submit-btn').on('click', checkAnswers);
        $('#startover-btn').on('click', startOver);
        $('#pswdBtn').on('click', verify);

        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // Main Program ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        $('input, button').prop('disabled', true); //disable interface
        $('#pswdInput').prop('disabled', false); //turn on password input area and button
        $('#pswdBtn').prop('disabled', false);
        let pswd = 'boobs'
        let keys = [1, 2, 3, 4, 'h2o']

    });
});
