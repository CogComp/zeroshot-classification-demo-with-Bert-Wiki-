# ZeroShotTCDemo

Step 1: Download pretrained models to data/demo_models/

Step 2: Download ESA word2id.json and matrix from the URL https://drive.google.com/file/d/18I-cSzhEoKgfCEfpnWKq2yEhES7_roaS/view?usp=sharing, and store them in data/ESA/

Step 3: Run run.sh

New Step 4: Then in another termianl enter:
```
curl -d '{"text":"The fox jumped over the fence, and the fence fell down.","models":["Bert-MNLI","Bert-FEVER", "Bert-RTE", "ESA", "Bart-MNLI","Bart-FEVER", "Bart-RTE"],"labels":["Society", "Health", "Sports"], "descriptions":["society des"]}' -H 'Content-Type: application/json' -X POST http://dickens.seas.upenn.edu:4007/predict
```
Step 5:
 
Open url https://cogcomp.seas.upenn.edu/page/demo_view/ZeroShotTextClassification in the browser, then you can play with it!
