//https://teachablemachine.withgoogle.com/models/M_nbg5R2O/
function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true,video:false});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/M_nbg5R2O/model.json',modelReady);
    }
    function modelReady(){
        classifier.classify(gotResults);
    }
    
    var dog=0;
    var cat=0;

    function gotResults(error,results){
if(error){
    console.error(error);
}else{
    console.log(results);
    random_number_r=Math.floor(Math.random()*255)+1;
    random_number_b=Math.floor(Math.random()*255)+1;
    random_number_g=Math.floor(Math.random()*255)+1;
    document.getElementById("result_label").innerHTML='I can hear - '+ results[0].label;
        document.getElementById("result_amountrec").innerHTML='Accuracy - '+(results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
        
        img=document.getElementById("alien1");
      
     
        if(results[0].label=="Dog"){
            img.src='dog.gif';
            dog=dog+1;
        }else if(results[0].label=="Cat"){
            img.src='cat.gif';
            cat=cat+1;
        }else{
            img.src='listeinng.gif';}
        }}