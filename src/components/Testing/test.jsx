import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "next/image";
import styles from "../styles/Merch.module.css";
import merch from "../public/images/t-shirt.webp";
import { Stack } from "react-bootstrap";

import { useRouter } from "next/router";

const Merch = () => {
  const router = useRouter();

  const buyNow = () => {
    router.push(
      "https://forms.gle/zUVwzgCDQBbvFHrv9"
    );
  };

  const containerRef  = useRef(null);
  const title1Ref = useRef(null);
  const title2Ref = useRef(null);
  const imageRef = useRef(null);
  const descriptionRef1 = useRef(null);
  const descriptionRef2 = useRef(null);
  const descriptionRef3 = useRef(null);
  const descriptionRef4 = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      title1Ref.current,
      {
        x: "-100%",
        opacity: 0,
      },
      {
        x: "0%",
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "center center",
          scrub: 1,
        },
      }
    );
    gsap.fromTo(
      title2Ref.current,
      {
        x: "100%",
        opacity: 0,
      },
      {
        x: "0%",
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "center center",
          scrub: 1,
          onEnter: () => {
            gsap.fromTo(
              imageRef.current,
              {
                opacity: 0,
                scale: 0.5,
                y: 50,
              },
              {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 1,
                delay: 0.5,
              }
            );
            gsap.fromTo(
              descriptionRef1.current,
              {
                opacity: 0,
                scale: 0.5,
                y: 50,
              },
              {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 1,
                delay: 0.6,
              }
            );
            gsap.fromTo(
              descriptionRef2.current,
              {
                opacity: 0,
                scale: 0.5,
                y: 50,
              },
              {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 1,
                delay: 0.7,
              }
            );
            gsap.fromTo(
              descriptionRef3.current,
              {
                opacity: 0,
                scale: 0.5,
                y: 50,
              },
              {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 1,
                delay: 0.8,
              }
            );
            gsap.fromTo(
              descriptionRef4.current,
              {
                opacity: 0,
                scale: 0.5,
                y: 50,
              },
              {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 1,
                delay: 0.9,
              }
            );
          },
          onLeaveBack: () => {
            gsap.to(imageRef.current, {
              opacity: 0,
              scale: 0.5,
              y: 50,
              duration: 0.5,
            });
            gsap.to(descriptionRef1.current, {
              opacity: 0,
              scale: 0.5,
              y: 50,
              duration: 0.5,
            });
            gsap.to(descriptionRef2.current, {
              opacity: 0,
              scale: 0.5,
              y: 50,
              duration: 0.5,
            });
            gsap.to(descriptionRef3.current, {
              opacity: 0,
              scale: 0.5,
              y: 50,
              duration: 0.5,
            });
            gsap.to(descriptionRef4.current, {
              opacity: 0,
              scale: 0.5,
              y: 50,
              duration: 0.5,
            });
          },
        },
      }
    );
  }, []);

  return (
    <Container fluid ref={containerRef} className={styles.container}>
      <Row className="flex-wrap d-flex align-items-center">
        <span ref={title1Ref} className={styles.title1}>
          Merch
        </span>
      </Row>
      <Row className="flex-wrap d-flex align-items-center">
        <span ref={title2Ref} className={styles.title2}>
          Drop
        </span>
      </Row>
      {/* Using Next.js Image component */}
      <Row
        className={`d-flex flex-wrap align-items-center ${styles.imageContainer}`}
      >
        <Col md={6}>
          <Image
            ref={imageRef}
            src={merch} // Replace with the actual image path
            alt="Merch Image"
            width={1165}
            height={866}
            style={{ opacity: 0 }} // Set your desired styles
            className={styles.image}
          />
        </Col>
        <Col xmd={6} className={styles.description}>
          <Stack>
            <span ref={descriptionRef1}>Moraforesight</span>
            <span ref={descriptionRef2}>official t shirt</span>
            <span ref={descriptionRef3}>
              Introducing our cutting-edge navy blue t-shirt crafted with a
              sleek wetlook<br></br>
              material that exudes a futuristic aura.<br></br>
              This modern garment merges style and innovation, making it the
              perfect<br></br>
              choice for those seeking a fashion-forward statement.
            </span>
            <span>
              <Button
                className={styles.btn}
                onClick={buyNow}
                ref={descriptionRef4}
              >
                Buy Now
              </Button>
            </span>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
};
export default Merch;
