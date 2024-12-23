"use client";
import Navbar from "../components/Navbar/Navbar";

import "./page.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <ul>
        <li>
          <a href="">home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="featuredcars">featured cars</a>
        </li>
      </ul>

      <div className="container">
        <h1>my first heading</h1>

        <h2>my second heading</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae
          luctus risus. In vitae finibus arcu. Proin elementum gravida tellus,
          mattis ultrices nibh mollis a. Suspendisse id eros venenatis,
          tristique urna sit amet, blandit diam. Aenean ac ex quis mi dignissim
          consectetur sed eu ligula. Nam in est purus. Integer tristique
          porttitor sapien tempor dictum. Etiam ultricies rutrum dui, eu dictum
          neque ullamcorper ac. Ut eu orci elementum, sodales risus ut, vehicula
          sapien. Etiam tincidunt vitae leo in molestie. Nunc quis tortor et
          elit ultricies tempus ut ut nunc. Phasellus congue scelerisque augue,
          nec fringilla dolor. Cras ut ex consequat, convallis tortor sed,
          suscipit ipsum. Sed arcu enim, condimentum vel auctor id, fermentum
          non velit.
        </p>
        <h3>my third heading</h3>
        <p>
          {" "}
          Maecenas eu libero tempor, tempor lorem eu, fermentum lorem. Donec
          ullamcorper tortor arcu, ut rhoncus purus accumsan rhoncus. Phasellus
          lobortis nibh eget diam scelerisque, at aliquet nulla ultrices. Mauris
          turpis tortor, fermentum in elit eu, consequat tincidunt nunc. Nulla
          luctus sem odio, in tincidunt odio luctus eget. Donec sed finibus
          elit, non pharetra ex. Phasellus sit amet luctus orci. Cras ut ligula
          sagittis, gravida eros quis, consectetur arcu. Mauris et efficitur
          ante, sed dignissim ante. Integer lacinia sit amet sapien facilisis
          tincidunt. Quisque justo nisl, ullamcorper quis luctus a, porta ac
          neque.
        </p>
        <h4>my fourth heading</h4>
        <p>
          {" "}
          Morbi dapibus dui ante, in suscipit quam pellentesque viverra. Donec
          elit tortor, malesuada eget ante quis, iaculis congue tortor. Aenean
          pulvinar arcu lorem, fermentum blandit mauris commodo non. Morbi id
          feugiat est, id volutpat nisi. Integer vitae ligula euismod, molestie
          urna eu, finibus ligula. Donec mattis fringilla nisi vel vulputate.
          Aliquam arcu odio, vehicula eget diam in, suscipit sollicitudin risus.
          Suspendisse orci lacus, maximus non arcu venenatis, mollis maximus
          lorem. Vestibulum id leo congue, imperdiet massa aliquam, scelerisque
          dui. Vestibulum accumsan at nibh vitae consectetur. Ut eget nibh
          purus.
        </p>
        <h5>my fifth heading</h5>
        <p>
          {" "}
          Pellentesque quis dignissim metus. Vivamus pellentesque dictum nisi at
          fermentum. In id pretium metus. Morbi eu quam rhoncus, semper dolor
          sed, pretium odio. Pellentesque ac sapien purus. Praesent eu lacinia
          nulla. Morbi felis nulla, congue vitae iaculis eget, tincidunt et
          elit. Donec id pharetra magna. Nulla eu eleifend tellus, in sodales
          neque. Aliquam hendrerit sagittis lorem pretium dapibus. Aenean ac dui
          eget libero pretium placerat sed vitae ex. Sed vehicula tempor urna,
          eu fringilla felis euismod vitae. Vestibulum nunc ante, pretium vitae
          dolor quis, pulvinar vehicula lectus. Duis ut tortor in sem maximus
          sagittis aliquet sit amet nisl.
        </p>

        <p>
          {" "}
          Ut auctor tempus metus, a egestas magna. Duis est elit, hendrerit id
          mauris a, sodales congue nisl. Aenean egestas tortor sapien, nec
          ultrices nunc iaculis ac. Etiam tincidunt lorem metus, id egestas diam
          molestie non. Phasellus venenatis ipsum et massa iaculis imperdiet.
          Vivamus ut tortor mollis, dapibus velit eget, semper leo. Nullam id
          posuere nunc. Nunc eget ligula id libero eleifend tristique quis quis
          sem. In facilisis fringilla metus, sed porta justo congue vel. Donec
          id condimentum mauris. Donec nec velit vel augue convallis vulputate.
          Cras id vulputate nunc.
        </p>
      </div>
    </div>
  );
}
