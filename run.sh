export CUDA_VISIBLE_DEVICES=3
while [ 1 -eq 1 ]
do
    python3 backend_cherry.py --ZEROSHOT_MODELS data/demo_models/ --ZEROSHOT_RESOURCES data/ESA/
done