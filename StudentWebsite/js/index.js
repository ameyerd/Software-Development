$(document).ready(function() {
    var apiKey = "5bc82451636190abd9d7afe6fe9b20b5" // Enter the API key
    console.log(`state_info is: ${state_info}`) // Notice the templating here, use that when you form your url


    // TODO
    // Iterate over the state_info array and call the api for each state_name to get the current temperature
    // Example to call the api using state_name
    // This should be done inside the for loop

    Object.keys(state_info).forEach((item,i)=> {

    var state_obj = state_info[item]
    var url =`https://api.weatherstack.com/forecast?access_key=${apiKey}&query=${state_obj.lat},${state_obj.lng}`;

    $.ajax({url:url, dataType:"jsonp"}).then(function(data) {

                console.log(data);
                //var temperature = null
                // TODO
                // Fill in the RHS of the below line and uncomment it. Remember how we accessed the temperature in Lab 9. Remember to convert it into farenheit.

                var temperature = data.current.temperature;
                //to farenheit
                temperature = (9*temperature/5) + 32;

                console.log(temperature)

                //TODO
                // Default color gray
                // Create a series of if else blocks to set the color for the state based on the temperature
                // Less than equal to 10F	#6495ED
                if(temperature <= 10)
                {
                  $('#'+item).css('fill', "#6495ED");
                }
                if(temperature > 10 && temperature <= 20)
                {
                  $('#'+item).css('fill', "#7FFFD4");
                }
                if(temperature > 20 && temperature <= 30)
                {
                  $('#'+item).css('fill', "#0000FF");
                }
                if(temperature > 30 && temperature <= 40)
                {
                  $('#'+item).css('fill', "#008B8B");
                }
                if(temperature > 40 && temperature <= 50)
                {
                  $('#'+item).css('fill', "#00BFFF");
                }
                if(temperature > 50 && temperature <= 60)
                {
                  $('#'+item).css('fill', "#F08080");
                }
                if(temperature > 60 && temperature <= 70)
                {
                  $('#'+item).css('fill', "#CD5C5C");
                }
                if(temperature > 70 && temperature <= 80)
                {
                  $('#'+item).css('fill', "#8B0000");
                }
                if(temperature > 80 && temperature <= 90)
                {
                  $('#'+item).css('fill', "#B22222");
                }
                if(temperature > 90)
                {
                  $('#'+item).css('fill', "#FF0000");
                }
                // else {
                //   $('#'+item).css('fill', "#808080");
                // }

                // Between 11F and 20F	#7FFFD4
                // Between 21F and 30F	#0000FF
                // Between 31F and 40F	#008B8B
                // Between 41F and 50F	#00BFFF
                // Between 51F and 60F	#F08080
                // Between 61F and 70F	#CD5C5C
                // Between 71F and equal to 80F	#8B0000
                // Between 81F and equal to 90F	#B22222
                // Greater than 90F	#FF0000

                //$('#CO').css('fill', "#F08080");   // Example on how to fill colors for your state.

        });
    });
});
