# Project Title

API for Example Project

---
## Requirements

For development, you will only need Node.js and a node global package, Yarn/npm, installed in your environement.

## Google Cloud

### Authentication

```
gcloud auth activate-service-account --key-file GCloudKey.json --project googleProjectName
```

```
docker build -t cloud-run-example .

cat GCloudKey.json | docker login -u _json_key --password-stdin https://gcr.io

docker tag cloud-run-example gcr.io/petrovickdevops/cloud-run-example

docker push gcr.io/petrovickdevops/cloud-run-example
```


```
gcloud beta run deploy cloud-run-example --image gcr.io/petrovickdevops/cloud-run-example --platform managed --port 3000 --region us-central1 --allow-unauthenticated
```
