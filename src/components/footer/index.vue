<template>
  <div class="container-bg">
    <div class="container">
      <div class="contact-us">
        <div class="adress">
          <i class="fas fa-map-marker-alt icon"></i>
          <h4>Adres</h4>
          <p>17.Eylül Mah.Atatürk Cad. No:69-71</p>
          <p>Bandırma/BALIKESİR</p>
        </div>
        <div class="phone-number">
          <i class="fas fa-mobile-alt icon"></i>
          <h4>Telefon Numarası</h4>
          <p><a href="tel:02667137777">(0266) 713 77 77 </a></p>
        </div>
        <div class="e-mail">
          <i class="fas fa-envelope icon"></i>
          <h4>E-mail Adresi</h4>
          <p>
            <a href="mailto:info@marmaradijital.com.tr">
              info@marmaradijital.com.tr
            </a>
          </p>
        </div>
        <div class="working-days">
          <i class="fas fa-calendar-alt icon"></i>
          <h4>Çalışma Saatlerimiz</h4>
          <p>Pazartesi-Cumartesi / 9:00 - 19:00</p>
        </div>
      </div>
      <form @submit.prevent class="contact-form" action="">
        <input type="text" placeholder="Name" class="text" />
        <input type="email" placeholder="E-mail Adress" class="email-text" />
        <textarea
          class="textarea"
          placeholder="Your Message"
          name=""
          id=""
          cols="48"
          rows="6"
        ></textarea>
        <input type="submit" value="Gönder" @submit="send" />
      </form>
    </div>
    <div class="social-media">
      <p class="social-items">
        <span class="copyright"
          >&#169; Marmara Dijital. Tüm Hakları Saklıdır 2022</span
        >
        <span><i class="fab fa-whatsapp"></i></span>
        <span><i class="fab fa-instagram"></i></span>
        <span><i class="fab fa-facebook-f"></i></span>
      </p>
      <p></p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    send() {},
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap");
.container-bg {
  background-color: rgb(248, 248, 248);
}
.container {
  display: flex;
  width: 90%;
  position: relative;
  margin: auto;
  height: 600px;
  font-family: "Poppins", sans-serif;
}
.contact-us {
  flex-basis: 60%;

  .adress {
    position: absolute;
    top: 10%;
    left: 15%;
  }
  .phone-number {
    position: absolute;
    top: 25%;
    left: 40%;
  }
  .e-mail {
    position: absolute;
    top: 50%;
    left: 13%;
  }
  .working-days {
    position: absolute;
    top: 60%;
    left: 32%;
  }
}
a {
  text-decoration: none;
  color: rgb(7, 6, 6);
}

.icon {
  display: flex;
  justify-content: center;
  font-size: 4rem;
  color: #17303d;
}
h4 {
  text-align: center;
}
p {
  text-align: center;
  font-weight: 550;
  color: rgb(7, 6, 6);
}

.contact-form {
  flex-basis: 40%;
  margin: auto;
  margin-left: 20%;
}
input {
  display: block;
  width: 50%;
  padding: 3px 5px;
  line-height: 30px;
  margin-left: 12%;
}
textarea {
  width: 75%;
}

input,
textarea {
  margin-bottom: 2%;
  border-radius: 5px;
  border: 0.5px solid rgb(165, 159, 159);
  font-size: 15px;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  background: transparent;
  text-align: center;

  &:focus {
    outline: 0.5px solid gray;
    text-align: left;
  }
}
input[type="submit"] {
  border: 0;
  border-radius: 10px;
  background-color: #09161d;
  color: white;
  width: 100px;
  font-size: 0.8rem;
  margin-left: 27%;
  cursor: pointer;

  &:hover {
    background-color: #09161df1;
  }
}
.social-items {
  position: relative;
  width: 82%;
  text-align: right;
  padding-bottom: 10px;
  background-color: rgb(245, 245, 245);

  .copyright {
    position: absolute;
    font-size: 0.8rem;
    left: 20%;
    color: gray;
  }

  span {
    margin: auto 1%;
    font-size: 2rem;
    cursor: pointer;
  }
}
</style>