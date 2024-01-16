"use client";

import { useRef, useState } from "react";
import Image from "next/image";

import classes from "./imagePicker.module.css";

const ImagePicker = ({ label, name }) => {
    const [pickedImage, setPickedImage] = useState();

    const inputRef = useRef(null);

    const handlePickClick = () => {
        inputRef.current.click();
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];

        if (!file) {
            setPickedImage(null);
            return;
        }

        const fileReader = new FileReader();

        fileReader.onload = () => {
            setPickedImage(fileReader.result);
        };

        fileReader.readAsDataURL(file);
    };

    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!pickedImage && <p>No image picked yet.</p>}
                    {pickedImage && (
                        <Image
                            src={pickedImage}
                            alt="the image selected by the user"
                            fill
                        />
                    )}
                </div>
                <input
                    type="file"
                    id={name}
                    accept="image/png, image/jpeg"
                    name={name}
                    className={classes.input}
                    ref={inputRef}
                    onChange={handleImageChange}
                    required
                />
                <button
                    onClick={handlePickClick}
                    className={classes.button}
                    type="button"
                >
                    Pick an Image
                </button>
            </div>
        </div>
    );
};

export { ImagePicker };
