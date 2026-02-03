flowchart TD

    %% User Layer
    U[User] --> FE[Frontend<br/>(React/HTML/CSS)]

    %% Frontend to Backend
    FE --> API[Backend API<br/>(Python/Node)]

    %% Backend to Database
    API --> DB[(Database<br/>(MySQL/PostgreSQL))]

    %% Backend to Cloud Services
    API --> S3[S3 Bucket<br/>(Static Assets / File Storage)]
    API --> CW[CloudWatch Logs<br/>(Monitoring & Log Analysis)]

    %% CI/CD Pipeline
    CI[CI/CD Pipeline<br/>(GitHub Actions/TeamCity)] --> API
    CI --> FE

    %% QA Layers
    QA1[Manual Testing<br/>(Test Cases, Smoke, Regression)]
    QA2[API Testing<br/>(Postman)]
    QA3[Automation Testing<br/>(Selenium/Python)]
    QA4[Monitoring Validation<br/>(CloudWatch, Logs)]

    QA1 --> FE
    QA1 --> API
    QA2 --> API
    QA3 --> FE
    QA3 --> API
    QA4 --> CW

    %% Storage & Artifacts
    ART[Reports & Evidence<br/>(Screenshots, Logs, Reports)]
    QA1 --> ART
    QA2 --> ART
    QA3 --> ART
    QA4 --> ART
# QualityHub-Web-Platform
QualityHub Web Platform– Frontend, Backend, API, Cloud, Automation”
