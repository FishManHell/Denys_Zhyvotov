export const visibleScroll = () => {
    if (document.body.style.overflow === "hidden") {
        document.body.style.overflow = "auto"
    }
}

export const hiddenScroll = () => {
    if (document.body.style.overflow !== "hidden") {
        document.body.style.overflow = "hidden";
    }
}