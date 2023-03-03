import React from 'react'

export const IconViewer = () => {
    // @ts-ignore
    return (
        <>
            <div
                style={{
                    position: 'fixed',
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    backgroundColor: 'white',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 10,
                        padding: 30,
                    }}
                >
                    {Object.keys(icons).map((i) => (
                        <div
                            className="d-center"
                            style={{ width: 120, height: 80 }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: 5,
                                }}
                            >
                                <Icon
                                    icon={i}
                                    size={48}
                                    fill="var(--color-secondary)"
                                />
                                <span>{i}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

interface IconProps {
    className?: string
    fill?: string
    size?: number
    height?: number
    marginLeft?: number
    margin?: number
    icon: string
}

export const Icon = ({
    className,
    fill,
    size,
    height,
    icon,
    marginLeft,
    margin,
}: IconProps) => (
    <div
        className={className}
        style={{
            display: 'flex',
            alignItems: 'center',
            color: fill,
            width: size || 16,
            height: height || size || 16,
            marginLeft: marginLeft || 0,
            marginRight: margin || 0,
        }}
    >
        {icons[icon]}
    </div>
)

const icons = {
    Hamburger: (
        <svg
            width="18"
            height="12"
            viewBox="0 0 18 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M1 12H17C17.55 12 18 11.55 18 11C18 10.45 17.55 10 17 10H1C0.45 10 0 10.45 0 11C0 11.55 0.45 12 1 12ZM1 7H17C17.55 7 18 6.55 18 6C18 5.45 17.55 5 17 5H1C0.45 5 0 5.45 0 6C0 6.55 0.45 7 1 7ZM0 1C0 1.55 0.45 2 1 2H17C17.55 2 18 1.55 18 1C18 0.45 17.55 0 17 0H1C0.45 0 0 0.45 0 1Z"
                fill="currentColor"
            />
        </svg>
    ),
    Facebook: (
        <svg
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M22.7101 11.5C22.7101 5.30001 17.6782 0.268127 11.4782 0.268127C5.27822 0.268127 0.246338 5.30001 0.246338 11.5C0.246338 16.9362 4.11011 21.4627 9.23184 22.5073V14.8696H6.98547V11.5H9.23184V8.69204C9.23184 6.52429 10.9953 4.76088 13.163 4.76088H15.971V8.13045H13.7246C13.1068 8.13045 12.6014 8.63588 12.6014 9.25363V11.5H15.971V14.8696H12.6014V22.6757C18.2735 22.1141 22.7101 17.3294 22.7101 11.5Z"
                fill="currentColor"
            />
        </svg>
    ),
    Instagram: (
        <svg
            width="22"
            height="23"
            viewBox="0 0 22 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M14.3697 11.5C14.3697 12.1665 14.172 12.8179 13.8018 13.372C13.4315 13.9262 12.9053 14.3581 12.2896 14.6131C11.6739 14.8681 10.9964 14.9348 10.3427 14.8048C9.6891 14.6748 9.08871 14.3539 8.61746 13.8827C8.14622 13.4114 7.8253 12.811 7.69529 12.1574C7.56527 11.5038 7.632 10.8262 7.88703 10.2105C8.14207 9.59483 8.57395 9.06858 9.12808 8.69832C9.6822 8.32807 10.3337 8.13045 11.0001 8.13045C11.8929 8.13323 12.7484 8.48912 13.3797 9.12044C14.011 9.75175 14.3669 10.6072 14.3697 11.5ZM21.53 6.86686V16.1332C21.53 17.6971 20.9087 19.1969 19.8029 20.3028C18.697 21.4086 17.1972 22.0299 15.6333 22.0299H6.36695C4.80304 22.0299 3.30318 21.4086 2.19733 20.3028C1.09148 19.1969 0.470215 17.6971 0.470215 16.1332V6.86686C0.470215 5.30295 1.09148 3.80309 2.19733 2.69724C3.30318 1.59139 4.80304 0.970123 6.36695 0.970123H15.6333C17.1972 0.970123 18.697 1.59139 19.8029 2.69724C20.9087 3.80309 21.53 5.30295 21.53 6.86686ZM16.0545 11.5C16.0545 10.5004 15.758 9.52315 15.2026 8.69197C14.6473 7.86079 13.8579 7.21296 12.9343 6.83041C12.0108 6.44785 10.9945 6.34776 10.0141 6.54278C9.0336 6.73781 8.13301 7.21919 7.42614 7.92605C6.71928 8.63291 6.2379 9.53351 6.04288 10.514C5.84785 11.4944 5.94795 12.5107 6.3305 13.4342C6.71305 14.3578 7.36088 15.1472 8.19206 15.7025C9.02324 16.2579 10.0005 16.5544 11.0001 16.5544C12.3406 16.5544 13.6262 16.0219 14.5741 15.074C15.5219 14.1261 16.0545 12.8405 16.0545 11.5ZM17.7392 6.02447C17.7392 5.77456 17.6651 5.53026 17.5263 5.32246C17.3874 5.11466 17.1901 4.95271 16.9592 4.85707C16.7283 4.76143 16.4742 4.73641 16.2291 4.78516C15.984 4.83392 15.7589 4.95426 15.5822 5.13098C15.4054 5.3077 15.2851 5.53285 15.2363 5.77796C15.1876 6.02307 15.2126 6.27713 15.3082 6.50802C15.4039 6.73891 15.5658 6.93626 15.7736 7.07511C15.9814 7.21395 16.2257 7.28806 16.4756 7.28806C16.8108 7.28806 17.1322 7.15493 17.3691 6.91796C17.6061 6.68099 17.7392 6.35959 17.7392 6.02447Z"
                fill="currentColor"
            />
        </svg>
    ),
    twitter: (
        <svg
            width="23"
            height="19"
            viewBox="0 0 23 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M22.5403 3.01587C22.6055 2.92602 22.5089 2.80808 22.4056 2.84852C21.665 3.13574 20.8915 3.3293 20.103 3.42471C20.979 2.90148 21.658 2.10404 22.0349 1.15587C22.0731 1.05928 21.9675 0.972794 21.8777 1.02334C21.0611 1.47374 20.1816 1.79834 19.2662 1.98591C19.2474 1.9897 19.2279 1.98859 19.2096 1.98269C19.1913 1.97679 19.1749 1.9663 19.1618 1.95221C18.4729 1.22537 17.5659 0.742895 16.5781 0.577897C15.5904 0.412898 14.5758 0.574372 13.6881 1.03785C12.8004 1.50132 12.0879 2.24154 11.6587 3.14632C11.2295 4.05111 11.1069 5.07114 11.3096 6.05185C11.3132 6.06893 11.3128 6.0866 11.3086 6.10353C11.3043 6.12045 11.2962 6.13618 11.285 6.14951C11.2737 6.16283 11.2595 6.17341 11.2436 6.18043C11.2276 6.18745 11.2102 6.19072 11.1928 6.19001C9.41527 6.07961 7.67906 5.60722 6.09066 4.80182C4.50226 3.99641 3.09516 2.87498 1.95567 1.50631C1.94429 1.49207 1.92956 1.48088 1.91279 1.47374C1.89602 1.4666 1.87774 1.46374 1.85959 1.46541C1.84144 1.46708 1.82399 1.47323 1.80881 1.48331C1.79362 1.49339 1.78118 1.50708 1.77259 1.52316C1.41796 2.19589 1.23289 2.94503 1.23346 3.70551C1.23202 4.46297 1.4179 5.20903 1.77456 5.87727C2.13121 6.54551 2.64757 7.11519 3.27766 7.53558C2.61012 7.51744 1.95477 7.35255 1.35813 7.05261C1.28175 7.0133 1.18965 7.06834 1.19302 7.1537C1.23785 8.16581 1.60503 9.13708 2.24096 9.92573C2.91663 10.744 3.85418 11.3039 4.89505 11.5105C4.49436 11.6325 4.07835 11.6968 3.65954 11.7015C3.43183 11.6987 3.20451 11.6819 2.97889 11.6509C2.89465 11.6397 2.82614 11.7183 2.85534 11.797C3.17705 12.6678 3.75386 13.4214 4.51046 13.9594C5.26706 14.4974 6.1683 14.7948 7.0965 14.8127C5.30425 16.2224 3.05376 16.9189 0.778566 16.7682C0.659508 16.7603 0.604472 16.9187 0.706682 16.9794C2.71855 18.1732 5.0154 18.8019 7.35483 18.7989C9.0841 18.8169 10.7996 18.4901 12.4012 17.8377C14.0028 17.1852 15.4583 16.2202 16.6827 14.999C17.9072 13.7778 18.8761 12.3248 19.5327 10.725C20.1894 9.12515 20.5207 7.41051 20.5074 5.6812V5.14207C20.5074 5.12463 20.5114 5.10744 20.5192 5.09184C20.527 5.07624 20.5383 5.06268 20.5523 5.05221C21.3138 4.47743 21.984 3.7909 22.5403 3.01587Z"
                fill="currentColor"
            />
        </svg>
    ),
} as { [key: string]: JSX.Element }

export default Icon