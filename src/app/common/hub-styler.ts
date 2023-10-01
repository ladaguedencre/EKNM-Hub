
export abstract class HubStyler {

    public static getGradientBackgroundCss(url: string): string {
        return `
            @-webkit-keyframes fade-in-image {
                0% {
                    background: #100f0d;
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: center;
                    background-blend-mode: overlay;
                }
                100% {
                    background: url(${url});
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: center;
                    background-blend-mode: overlay;
                }
            }
            @keyframes fade-in-image {
                0% {
                    background: #100f0d;
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: center;
                    background-blend-mode: overlay;
                }
                100% {
                    background: url(${url});
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: center;
                    background-blend-mode: overlay;
                }
            }

            .fade-in-image {
                -webkit-animation: fade-in-image 0.4s ease-in both;
                animation: fade-in-image 0.4s ease-in both;
                -webkit-animation-delay: 0.3s;
                animation-delay: 0.3s;
                
            }
        `;
    }

    public static setStyling(document: Document, css: string) {
        HubStyler.clearStyling(document);
        let style = document.createElement("STYLE");
        style.innerText = css;
        document.body.appendChild(style);
    }

    public static clearStyling(document: Document) {
        let styleElem = document.getElementById("STYLE")
        if (styleElem)
        {
            document.removeChild(styleElem)
        }
    }
}