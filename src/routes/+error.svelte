<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>404 Not Found</title>
    <style>
        body, html {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #f0f0f0;
            font-family: 'Arial', sans-serif;
            color: #333;
        }
        .container {
            text-align: center;
        }
        .container h1 {
            font-size: 10rem;
            margin: 0;
            color: #ff6f61;
        }
        .container h2 {
            font-size: 2rem;
            margin: 0;
            color: #333;
        }
        .container p {
            font-size: 1.2rem;
            color: #666;
        }
        .container a {
            display: inline-block;
            margin-top: 20px;
            padding: 10px 20px;
            font-size: 1rem;
            color: #fff;
            background-color: #ff6f61;
            text-decoration: none;
            border-radius: 5px;
            transition: background-color 0.3s ease;
        }
        .container a:hover {
            background-color: #ff4c3b;
        }
        .animation {
            animation: float 1.5s infinite ease-in-out;
        }
        @keyframes float {
            0%, 100% {
                transform: translateY(0);
            }
            50% {
                transform: translateY(-10px);
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1 class="animation">404</h1>
        <h2>Page Not Found</h2>
        <p>Sorry, the page you are looking for does not exist.</p>
        <a href="/">Go Back to Home</a>
    </div>
</body>
</html>
