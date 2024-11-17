<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- =====BOX ICONS===== -->
        <link href='https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css' rel='stylesheet'>

        <!-- ===== CSS ===== -->
        <link rel="stylesheet" href="assets/css/styles.css">

        <title>Responsive landing page coffee 3D</title>
    </head>
    <body>
        <!--===== HEADER =====-->
        <header class="l-header">
            <nav class="nav bd-grid">
                <div>
                    <a href="" class="nav__logo">
                        <img src="assets/img/logo.png" alt="Coffee Logo" />
                      </a>
                      
                </div>
                
                <div class="nav__toggle" id="nav-toggle">
                    <i class='bx bx-menu'></i>
                </div>

                <div class="nav__menu" id="nav-menu">
                    <div class="nav__close" id="nav-close">
                        <i class='bx bx-x'></i>
                    </div>

                    <ul class="nav__list">
                        <li class="nav__item"><a href="#home" class="nav__link active">Home</a></li>
                        <li class="nav__item"><a href="#about" class="nav__link">About</a></li>
                        
                        <li class="nav__item"><a href="#contact" class="nav__link">Creator</a></li>
                    </ul>
                </div>
            </nav>
        </header>

        <main class="l-main">
            <!--===== HOME =====-->
            <section class="home" id="home">
                <div class="home__container bd-grid">
                    <div class="home__img">
                        <img src="assets/img/img1.png" alt="" data-speed="-2" class="move">
                        <img src="assets/img/img2.png" alt="" data-speed="2" class="move">
                        
                    </div>

                    <div class="home__data">
                        <h1 class="home__title">Chat.<br> Share. <br>Grow.</h1>
                        <p class="home__description">Reconnect with friends, stay close to family,<br>grow your community, and <br> explore shared interests.</p>
                        <a href="loading.php" class="home__button">Sign in</a>
                    </div>
                </div>
            </section>
             <!--===== ABOUT =====-->
    <section class="about" id="about">
        <div class="bd-grid">
            <div class="about__content">
                <h2 class="about__title">About Us</h2>
                <p class="about__description">We are passionate about connecting people through shared experiences and interests. Join us to chat, share, and grow with others.</p>
            </div>
        </div>
    </section>

    <!--===== CREATOR =====-->
    <section class="creator" id="contact">
        <div class="bd-grid">
            <div class="creator__content">
                <h2 class="creator__title">Creator</h2>
                <p class="creator__description">Meet the creator behind the project, dedicated to bringing people together in a meaningful way.</p>
                <a href="" class="home__button">Learn More</a>
            </div>
        </div>
    </section>

        </main>

        <!--===== GSAP =====-->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js"></script>

        <!--===== MAIN JS =====-->
        <script src="assets/js/main.js"></script>
    </body>
</html>