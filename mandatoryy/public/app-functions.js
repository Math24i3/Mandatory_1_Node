

var coronaStatusList = [];
            
            //Add a person to the corona-list and append a new row to table
            function addPerson(){
                let name = $('#name-input').val();
                let coronaStatus = $('#corona-status').val();
                let personObject = {
                    personName: name,
                    coronaInfected: coronaStatus
                }
                coronaStatusList.push(personObject);
                $('#name-input').val('');

                console.log(coronaStatusList);
                console.log(personObject);
                var newRowContent = "<tr><td>" + name + "</td><td>" + coronaStatus + "</td></tr>";
                $("#person-table").append(newRowContent);
                
            }