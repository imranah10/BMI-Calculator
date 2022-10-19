        var button=document.getElementById('btn');
        var hclor=document.getElementById('header')
        button.addEventListener('click',calculate)

        function calculate(){

            //get value by name
            // var weight=document.bmiform.weight.value;
            // console.log(weight);
            // var height=document.bmiform.height.value;
            // console.log(height);
            // var bmi=(weight/(height/100*height/100))
            // document.bmiform.result.value=bmi
            // console.log(bmi);

            // or get value by id

            var weight=document.getElementById('wgt').value;
            console.log(weight);
            var height=document.getElementById('hgt').value;
            console.log(height);
            var bmi=(weight/(height/100*height/100))
            document.getElementById('rslt').value=bmi
            console.log(bmi);
           
            




            //get value by name
            // if(weight>0&& height>0){
            //     if(bmi<18.5){
            //         document.bmiform.des.value="you are too thin.your bmi is not okay."
            //     }
            //     else if(bmi>18.5&& bmi<25){
            //         document.bmiform.des.value="you are healthier.your bmi is good."
            //     }
            //     else if (bmi>25){
            //         document.bmiform.des.value="you are fat.overweight."
            //     }
            // }

            //or get value by id

            if(weight>0&& height>0){
                if(bmi<18.5){
                    document.getElementById('description') .value="you are too thin.your bmi is not okay."
                }
                else if(bmi>18.5&& bmi<25){
                    document.getElementById('description').value="you are healthier.your bmi is good."
                }
                else if (bmi>25){
                    document.getElementById('description').value="you are fat.overweight."
                }
            }

        }