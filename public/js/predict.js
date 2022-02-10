
var label_dic = {
        "topics": ['society', 'science', 'health', 'education', 'computers', "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        "emotions": ['sadness', 'joy', 'anger', 'fear', 'surprise', "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        "situations": ['search', 'evacuation', 'utilities', 'water', 'shelter', "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        "covid-19": ['diagnosis','ecology','prevention', 'symptom', 'treatment', "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
    };
var text_dic = {
        "When is Thanksgiving celebrated in Canada?": "Syrian refugees at Jordan border are undergoing hardships due to lack of water. Massive bushfires are heard at North Alberta in Canada. About 88,000 people had to be evacuated from that area.",
        "The Christian Music field.": "The gono kalayan trust, which works to improve the incomes of poor farmers and is supported by christian aid, is helping to evacuate people stranded by the rising waters even though its own offices have been flooded.",
        "In the US , the threshold for gold is half a million.": "In the us, a texas nurse infected with ebola after caring for a liberian man who died from the disease no longer has the virus, her family said.",
        "Sometimes I can't even believe my life.": "Perhat Tursun Perhat Tursun Yarghol I am nonproductive but I am not a dishonored person. I am gonna say that I am not gonna praise you, Perhat Tursun. I would rather curse your weightless verses cold like Germans and like the castle Kafka was not able to get in than praise you, oh Perhat Tursun. I laugh at the smiley poor guys and stop suddenly after that... you made me look bad to the world. You poured the condom in the Tarim river into my brain. Why did you change the pattern of Uyghur poetry that always praises others? Who wants to sit next to you if you do that? You make me turn into a pious man and I am afraid of thinking about you as if I fear water. I am in the hospital because of this serious paradox. Of Perhat Tursun , you created my heart condition. I would understand a little bit if it is a gloomy poem but this looks like a foggy poem. He lived as who he was, didn't he? I liked it. Anybody want to play paradox? Let's play paradox, come on, if you are not concerned about being mentally ill. Let me keep doing. How to call this? Is that a poem? muhlis0998 23:21 5-1-2016 posted time Anybody want to play paradox? Being a mental patient ... You begin first and let's work together if it is ok Of Perhat Tursun , you created my heart condition. The last part is greatly composed. I wish more success for Yarghol's writing. For the readers: Yarghol, look at the parts of the works that you felt unnecessary and what is there is the absolute world you will definitely go to very soon. Learn the difference between word and talk. Just stick with the word and undress limitlessly in the desert of the meaning. Trust the poet who does not stay in the destination. He more and constantly talk about sex, darkness, and death Writer, it might be you that he was cursing. Keep away for what you got used to and who you love. Turn your eyeballs into poisonous arrows and your aim to shameless praises. You should understand that you can learn nothing from us. Dive into our colors and blossom up in our voices and white bushes but forget us for the significance of us. Something like that, Yarghol , I am afraid of something and anxious about something. I feel myself lonely like the moon and powerless like the widowed aunty in the village. Although I know poets die without seeing morning light, I still seek comfort from the verses about lights. I am satisfied with lying and betrayals. Please come, sell me slowly and sneakily. Block the sun that is not straight ever and take my bulky ethereality. Flame my last myths. If my inner organs did not resist the nights and my anxiousness did not warm up January, my stone like hard debts, an unknown someone did not step down on my shoulder, how my life would become miserable. I also feel myself extra like an abandoned gland and feel myself passionate like winter birds. I love the world with some kind of poor emotion... and I believe that is a betrayal for the soul writing poems in this time. I wait for something and seek comfort from something. Maybe I expected a death or a life after the death.."
    };

var examples ={
    
    "Getting serious about gaming disorder": {
        "text": "A recent survey on addiction by Japanese researchers suggests that playing video games for long periods can be seriously harmful to people's work life and health. It is the first nationwide survey of gaming behavior in the country.",
        "labels": ["children", "technology", "lifestyle", "", "", "","", "", "", "", "", "", "", "", "", "", "", "", "","" ],
        "descriptitons": ["", "", "", "", "", "","", "", "", "", "", "", "", "", "", "", "", "", "", ""]
    },

    "Facial recognition as policing tool faces resistance in US": {
        "text": "Facial recognition software matches surveillance footage of criminal suspects with photos from police databases. Critics say the technology infringes on privacy rights and are pushing for more stringent regulations. Outright bans have been enacted in Cambridge, Massachusetts, and San Francisco, California, among other cities.",
        "labels": ["accidents","technology", "science", "", "", "","", "", "", "", "", "", "", "", "", "", "", "", "","" ],
        "descriptitons": ["break in | crimes", "computer vision | artificial intelligence", "science is a systematic enterprise that builds and organizes knowledge in the form of testable explanations and predictions about the universe.", "", "", "","", "", "", "", "", "", "", "", "", "", "", "", "", ""]
    },

    "Expert: Speed vs Safety in Vaccine Race": {
        "text": "Vaccine research expert Dr. Ishii Ken discusses Oxford University's latest findings, plus ongoing coronavirus vaccine efforts around the world and the need to balance speed with safety in the vaccine race.",
        "labels": ["pandemic","technology", "music", "", "", "", "","", "", "", "", "", "", "", "", "", "", "", "", "" ],
        "descriptitons": ["Covid-19 | Coronaviruses are a group of related RNA viruses.", "medical", "", "", "", "","", "", "", "", "", "", "", "", "", "", "", "", "", ""]
    },



};

var empty_list = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];

var color_dic = {
    "Bert-Wiki": '#00ffff',
    "Bert-MNLI": '#dd6b66',
    "Bert-FEVER": '#759aa0',
    "Bert-RTE": '#e69d87',
    "ESA": '#8dc1a9',
    "Bart-MNLI": '#ea7e53',
    "Bart-FEVER": '#eedd78',
    "Bart-RTE": '#73a373'
};

$("#btn1").click(function () {
    predict();
});

$("#btn2").click(function () {
   $("#text").val(
       ""
);


    $("#center").html(
        // $.map(empty_list, function(item) {
        //     return '<input id="" placeholder="" type="text" value="' + item + '" >';
        // }).join('')
        LoopLabels(empty_list, 'Label')
    );
        $("#right").html(
        // $.map(empty_list, function(item) {
        //     return '<input id="" placeholder="" type="text" value="' + item + '" >';
        // }).join('')
            LoopLabels(empty_list, 'Label description (optional)')
    )
});

$("#buttonRandomButton").click(function () {
    var pool_list = ['search', 'evacuation', 'utilities', 'water', 'shelter', 'medical', 'food', 'crimeviolence', 'terrorism',
        'regimechange', 'society', 'culture', 'science', 'mathematics', 'health', 'education', 'reference', 'computers', 'Internet',
        'sports', 'business', 'finance', 'entertainment', 'music', ' family', 'relationships', 'politics', 'government', 'sadness', 'joy',
        'anger', 'disgust', 'fear', 'surprise', 'shame', 'guilt', 'love', 'death', 'diagnosis','ecology','prediction','prevention',
        ,'spread', 'statistics', 'symptom', 'treatment', 'factual', 'interview', 'opinion'];

    var sample_list = getRandomSubarray(pool_list, 5);
    var full_list = sample_list.concat(["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]);

    $("#center").html(
        // $.map(full_list, function(item) {
        //     return '<input id="" placeholder="" type="text" value="' + item + '" >';
        // }).join('')
        LoopLabels(full_list, 'Label')
    );

    $("#right").html(
        //
        // $.map(empty_list, function(item) {
        //     return '<input id="" placeholder="" type="text" value="' + item + '" >';
        // }).join('')
         LoopLabels(empty_list, 'label description (optional)')
    )
});

function LoopLabels(arr, placeholderText) {

    var HtmlString = '', i = 0;
    while (arr[i] != '') {
        temp = '<input id="'+ i +'" placeholder="" type="text" value="' + arr[i] + '" >';
        HtmlString += temp;
        i ++;
    } ;
    while (i < arr.length) {
        temp = '<input id="'+ i +'" placeholder="'+ placeholderText+' '+ (i+1) +' " type="text" value="" >';
        HtmlString += temp;
        i ++;
    } ;
    return HtmlString


}

function getRandomSubarray(arr, size) {
    var shuffled = arr.slice(0), i = arr.length, temp, index;
    while (i--) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(0, size);
}

$("#buttonLabel").on('click', 'a', function (event) {
    var key = this.textContent;

    var text = examples[key]["text"];
    var label_list = examples[key]["labels"];
    var descriptitons_list = examples[key]["descriptitons"];
    var full_list = sample_list.concat(["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]);

    $("#center").html(
        // $.map(list, function(item) {
        //     return '<input type="text" id="" placeholder="" value="' + item + '" >';
        // }).join('')
        LoopLabels(full_list, 'Label')
    );
        $("#right").html(
        // $.map(empty_list, function(item) {
        //     return '<input id="" placeholder="" type="text" value="' + item + '" >';
        // }).join('')
            LoopLabels(empty_list, 'label description (optional)')
    )
});



$("#buttonText").on('click', 'a', function (event) {
    var key = this.textContent;
    console.log(key);
    var text = examples[key]["text"];
    var label_list = examples[key]["labels"];
    var descriptitons_list = examples[key]["descriptitons"];


    $("#text").val(
       text
);
    $("#center").html(
    LoopLabels(label_list, 'label')
    );
        $("#right").html(
    LoopLabels(descriptitons_list, 'label description (optional)')
    );

});

function showModelDropDown(arr) {
    //var HTMLString = '<div class="dropdown" style="margin-top: -35px" > <button class="btn" href="###">Sort by <i class="fa fa-caret-down"></i> </button> <div class="dropdown-content" id="buttonModel">';
      var HTMLString = '<div class="dropdown" style="margin-top: -45px;" > <button class="btn" href="###">Sort by <i class="fa fa-caret-down"></i> </button> <div class="dropdown-content" id="buttonModel">';
        arr.forEach(function (item) {
            HTMLString += '<a href="###">' +item+ '</a>';
        });
        HTMLString += '<a href="###">All Models</a>';
    HTMLString +=  '</div> </div>';



    return HTMLString
}

function predict(){

            // let result = document.querySelector('.result');
            // let text = document.querySelector('#text');
            // let labels = document.querySelector('#labels');
            // let models = document.querySelector('#models');

            let text = $("#text").val();
            //let labels = ["Society", "Health", "Sports"];
            //let models = ["MNLI","FEVER"];

            let labels = [];
            let models = [];
            let descriptions =[];
            if (text.length == 0) {
                alert('Please enter text or select one example!');
                // history.back();
                window.location.reload();
                return

            };



            $('#center input').each(function(i){
                if(this.value !== null && this.value !== "" && this.value !== undefined) {
                    // labels.push(this.value);
                    labels[this.id] = this.value
                }
            });
                        if (labels.length == 0) {
                alert('Please enter at least one label!');
                // history.back();
                             window.location.reload();
                return

            }
            $("input[name^='models']").each(function(i){
                if(this.checked == true){
                     models.push(this.value);
                }

            });

            // let description = Array(maxArrayLength?: models.length);

            $('#right input').each(function(i){
                if(this.value !== null && this.value !== "" && this.value !== undefined) {
                    // descriptions.push(this.value);
                    descriptions[this.id] = this.value;
                }
            });

            // var dimensions = (["label", "Average"]).concat(models);
            //
            // var series = Array(models.length + 1).fill({type: 'bar'});

            var data =  {
 	// "text":"The fox jumped over the fence, and the fence fell down.","models":["MNLI","FEVER"],"labels":["Society", "Health", "Sports"]};
            "text": text,
            "labels": labels,
            "models": models,
            "descriptions": descriptions
            };
            console.log('data:');
            console.log(data);

            var reuslut_chart = [
            {label: 'sadness', 'MNLI': 31, 'FEVER': 85.8, 'RTE': 93.7},
            {label: 'happy', 'MNLI': 83.1, 'FEVER': 73.4, 'RTE': 55.1},
            {label: 'sports', 'MNLI': 86.4, 'FEVER': 65.2, 'RTE': 82.5},
            {label: 'health', 'MNLI': 72.4, 'FEVER': 53.9, 'RTE': 39.1},
            {label: '123', 'MNLI': 43.3, 'FEVER': 85.8, 'RTE': 93.7},
            {label: '4', 'MNLI': 83.1, 'FEVER': 73.4, 'RTE': 55.1},
            {label: 's', 'MNLI': 86.4, 'FEVER': 65.2, 'RTE': 82.5},
            {label: 'heh', 'MNLI': 72.4, 'FEVER': 53.9, 'RTE': 39.1}
        ];

            //document.getElementById('result-chart').style = "width: 800px; height: 500px; margin-left:10px";
            document.getElementById('result-chart').style = "width: 700px; height: 440px; margin-left:0px; margin-top: 0px; margin-right:-5px";    
        
            var myChart = echarts.init(document.getElementById('result-chart'));
            // Creating a XHR object
            // let xhr = new XMLHttpRequest();
    console.log('this code is run');
            var url = "./predict";
            myChart.showLoading();
            fetch(url,
                {
                    method: 'POST',
                    body : JSON.stringify(data),
                   headers: {"Content-Type" : "application/json"}
                    // //after succuss
                    // success : function(result) {
                    //     console.log(result);
                    //     $("#result").html(result);
                    // },
                    // error: function (error) {
                    //     console.log("error");
                    // }
                }
            ).then(resp => resp.json())
                .then(json => {
                    console.log(json);
                    // json_result = json["json_result"]
                    // $("#result").html(JSON.stringify(json))
                    // dimensions = (["label"]).concat(json["models"]);
                    // series = Array(models.length + 1).fill({type: 'bar'});
                    console.dir(json);
                    // console.log("start charting");
                    // console.log(dimensions);
                    myChart.hideLoading();
                     $("#result-table").html(
                        '<div>'
                         + '<div style="margin-top: -30px">'
                         + showModelDropDown(json['models'])
                            +'</div>'
                         + drawTable(fillTable(creatTableData(json)))
                        + '</div>'
                     );


                         // +'<div><p>4. This demo is running on CPU server, it may take a few seconds to get results.  </p></div>');
                    myChart.setOption({
                        yAxis: {
                                type: 'category',
                                axisLabel :{
                                interval:0
                                },
  // data: ['学生一', '学生二', '学生三', '学生四', '学生五', '学生六', '学生七']
                                },
                        title: {
                            text: 'Score \%',
                            top: -6,
                            subtext: ''
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'shadow'
                            }
                        },
                        legend: {
                            show: true,
　　　　　　                 top:"4%"
                        },



                        grid: {
                            left: '3%',
                            right: '4%',
                            bottom: '3%',
                            containLabel: true
                        },

                        color: getColorList(json['models']),

                        dataset: {
                            // dimensions: ["label", "MNLI", "FEVER", "RTE", "ESA", 'Bart-MNLI'],
                            dimensions: (["label"]).concat(json["models"]),


                            // source: [
                            //     {"label": "sadness", "Average": 22.886, "MNLI": 4.373, "FEVER": 62.951, "RTE": 1.335},
                            //     {"label": "happy", "Average": 22.958, "MNLI": 2.265, "FEVER": 65.422, "RTE": 1.186},
                            //     {"label": "health", "Average": 40.464, "MNLI": 9.415, "FEVER": 81.701, "RTE": 30.275},
                            //     {"label": "sports", "Average": 48.192, "MNLI": 50.021, "FEVER": 84.583, "RTE": 9.971}
                            //     ]
                            source: json["sorted_output"],


                        },

                        xAxis: {
                            type: 'value',
                            boundaryGap: [0, 0.01]
                        },
                        yAxis: {
                            type: 'category',
                        },
                        series: Array(json["models"].length).fill({type: 'bar'})



                    }, true);


                    $("#buttonModel").on('click', 'a', function (event) {
    var key = this.textContent;
    // console.log(key);
    if (key == "All Models") {
        sort_chart_all_model(json)
    } else {
    update_chart_each_model(json['sorted_output'], key)
                        };



});

                    })
                // .then(json =>console.log(json))
                .catch(e => console.log(e));

        };

function sort_each_model(sorted_output, model) {
    each_model_output = [];

    for (var i=0; i < sorted_output.length; i++) {
            var temp_obj = {};
            temp_obj['label'] = sorted_output[i]['label'];
            temp_obj[model] =  sorted_output[i][model];
            each_model_output.push(temp_obj);
    };

        // console.log('before sorting', each_model_output);
        each_model_output.sort(dynamicSort(model));
    return each_model_output
};

function creatTableData(json) {
    tableList = [
        json["models"],
        Array(json["models"].length).fill("None"),
        Array(json["models"].length).fill("None"),
        Array(json["models"].length).fill("None"),
        Array(json["models"].length).fill("None"),
        Array(json["models"].length).fill("None"),
    ];

    sorted_output = json["sorted_output"];
    for (var i=0; i < json["models"].length; i++) {
            model = json["models"][i];
            //console.log(model);
            var each_sorted_output = [];
            each_sorted_output = sort_each_model(sorted_output, model).reverse();
            //console.log(each_sorted_output);
            for (var j=0; j < 5 && j < each_sorted_output.length; j++) {
                console.log(each_sorted_output[j]);
                //tableList[j + 1][i] = each_sorted_output[j]['label'];
                tableList[j + 1][i] = '<b>'+ each_sorted_output[j]['label'] + '</b>'  +'<div>' + (each_sorted_output[j][model]/100).toFixed(4) + '</div>';
            };
    };

    return tableList
}

function getColorList(model_arr) {
    color_list = [];
    model_arr.forEach(function (item) {
        color = color_dic[item];
        color_list.push(color)
    });
    return color_list
}

function dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        /* next line works with strings and numbers,
         * and you may want to customize it to your needs
         */
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}

function update_chart_each_model(sorted_output, model) {
    var myChart = echarts.init(document.getElementById('result-chart'));
    console.log('sort oen model');
    console.log(sorted_output);
    each_model_output = sort_each_model(sorted_output, model);
    console.log(each_model_output);
    myChart.setOption({
                        title: {
                            text: 'Score %',
                            subtext: ''
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'shadow'
                            }
                        },
                        legend: {
                            show: true,
　　　　　　                 top:"6%"

                        },
                        grid: {
                            left: '3%',
                            right: '4%',
                            bottom: '3%',
                            containLabel: true
                        },
                        color: [color_dic[model]],

                        dataset: {
                            dimensions: ["label",  model],
                            // dimensions: (["label", "Average"]).concat(json["models"]),

                            // source: [
                            //     {"label": "sadness", "Average": 22.886, "MNLI": 4.373, "FEVER": 62.951, "RTE": 1.335},
                            //     {"label": "happy", "Average": 22.958, "MNLI": 2.265, "FEVER": 65.422, "RTE": 1.186},
                            //     {"label": "health", "Average": 40.464, "MNLI": 9.415, "FEVER": 81.701, "RTE": 30.275},
                            //     {"label": "sports", "Average": 48.192, "MNLI": 50.021, "FEVER": 84.583, "RTE": 9.971}
                            //     ]
                            source: each_model_output,


                        },
                        xAxis: {
                            type: 'value',
                            boundaryGap: [0, 0.01]
                        },
                        yAxis: {
                            type: 'category',
                        },
                        series: [{type: 'bar'}]

                    }, true);

};

function sort_chart_all_model(json) {
    var myChart = echarts.init(document.getElementById('result-chart'));
    // console.log('sort function start');
    // console.log(sorted_output);
    myChart.setOption({
                        title: {
                            text: 'Score \%',
                            subtext: ''
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'shadow'
                            }
                        },
                        legend: {
                            show: true,
　　　　　　                 top:"4%"

                        },
                        grid: {
                            left: '3%',
                            right: '4%',
                            bottom: '3%',
                            containLabel: true
                        },
                        color: getColorList(json['models']),
                        dataset: {
                            dimensions: (["label"]).concat(json["models"]),
                            // dimensions: (["label", "Average"]).concat(json["models"]),

                            // source: [
                            //     {"label": "sadness", "Average": 22.886, "MNLI": 4.373, "FEVER": 62.951, "RTE": 1.335},
                            //     {"label": "happy", "Average": 22.958, "MNLI": 2.265, "FEVER": 65.422, "RTE": 1.186},
                            //     {"label": "health", "Average": 40.464, "MNLI": 9.415, "FEVER": 81.701, "RTE": 30.275},
                            //     {"label": "sports", "Average": 48.192, "MNLI": 50.021, "FEVER": 84.583, "RTE": 9.971}
                            //     ]
                            source: json["sorted_output"],


                        },
                        xAxis: {
                            type: 'value',
                            boundaryGap: [0, 0.01]
                        },
                        yAxis: {
                            type: 'category',
                        },
                        series: Array(json["models"].length).fill({type: 'bar'})
                    }, true);

}

function drawTable(tableContentString) {
    tableHTMLString = '';
    tableHTMLString = '<h4>Top 5 lables for each model</h4><table> ' +
         tableContentString

        '</table>';
    return tableHTMLString
};

reuslut_chart = [
            {label: 'sadness', 'MNLI': 31, 'FEVER': 85.8, 'RTE': 93.7},
            {label: 'happy', 'MNLI': 83.1, 'FEVER': 73.4, 'RTE': 55.1},
            {label: 'sports', 'MNLI': 86.4, 'FEVER': 65.2, 'RTE': 82.5},
            {label: 'health', 'MNLI': 72.4, 'FEVER': 53.9, 'RTE': 39.1},
            {label: '123', 'MNLI': 43.3, 'FEVER': 85.8, 'RTE': 93.7},
            {label: '4', 'MNLI': 83.1, 'FEVER': 73.4, 'RTE': 55.1},
            {label: 's', 'MNLI': 86.4, 'FEVER': 65.2, 'RTE': 82.5},
            {label: 'heh', 'MNLI': 72.4, 'FEVER': 53.9, 'RTE': 39.1}
        ];



// function fillTable(tableList) {
//     tableContentString = '';
//     tableContentString = tableContentString + '<tr>';
//     tableList[0].forEach(function (item) {
//         tableContentString = tableContentString + '<th>' + item + '</th>';
//     });
//     tableContentString = tableContentString + '</tr>';

//     for (var i=1; i < tableList.length; i++) {
//         tableContentString = tableContentString + '<tr>';
//         tableList[i].forEach(function (item) {
//         tableContentString = tableContentString + '<td>' + item + '</td>';
//     });
//     tableContentString = tableContentString + '</tr>';
//     }


//     return tableContentString
// };

function fillTable(tableList) {
    tableContentString = '';
    tableContentString = tableContentString + '<tr>';
    // add rank column
    tableContentString = tableContentString + '<th> Rank </th>' ;
    // 
    tableList[0].forEach(function (item) {
        tableContentString = tableContentString + '<th style="text-align:center"><b>' + item + '</b></th>';
    });
    tableContentString = tableContentString + '</tr>';

    for (var i=1; i < tableList.length; i++) {
        tableContentString = tableContentString + '<tr>';
        // for rank
        tableContentString = tableContentString + '<td style="text-align:center">' + i + '</td>';
        tableList[i].forEach(function (item) {
        // item looks like: <b>technology</b><div>83.2354</div>
        //console.log(item);
        tableContentString = tableContentString + '<td style="text-align:center">' + item + '</td>';
    });
    tableContentString = tableContentString + '</tr>';
    }


    return tableContentString
};
