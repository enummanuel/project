<?php
session_start();
if(!isset($_SESSION['username'])){
    header("Location: login.html");
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Welcome, <?php echo $_SESSION['username']; ?></h1>
        <nav>
            <a href="dashboard.php">Dashboard</a>
            <a href="blog.html">Blog</a>
            <a href="logout.php">Logout</a>
        </nav>
    </header>

    <section>
        <h2>Your Courses</h2>
        <p>Here you can access your enrolled courses.</p>
        <!-- Add links to courses here -->
    </section>

    <footer>
        <p>&copy; 2024 Networking and Cloud Computing Department</p>
    </footer>
</body>
</html>
