import { media, styled } from "@styles";

const horizontalPadding = "2rem";

export const Overlay = styled.div`
  display: flex;
  overflow-y: auto;
  background-color: ${props => props.theme.colors.overlay};
  height: 100%;
  min-height: 100vh;
  position: fixed;
  top: 0;
  transition: 300ms;
  width: 100%;
  z-index: 2;
  align-items: center;
  ${media.smallScreen`
    align-items: center;
  `};
`;

export const Lightbox = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => props.theme.modal.modalWidth}px;
  height: inherit;
  height: auto;
  min-height: ${props => props.theme.modal.modalMinHeight}px;
  margin: 0 auto;
  background-color: ${props => props.theme.colors.white};
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 ${horizontalPadding} 0;
`;

export const Content = styled.div`
  padding: 4rem 0 1.8rem;
`;

export const Header = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.baseFont};
  font-weight: ${props => props.theme.typography.boldFontWeight};
  text-transform: uppercase;
  padding: 1.8rem 0 1.4rem;
  margin-bottom: 1px;
  p {
    margin-right: auto;
  }
  &:before {
    display: block;
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${props => props.theme.colors.light};
    width: calc(100% + ${horizontalPadding} * 2);
    height: 1px;
  }
`;

export const Footer = styled.div`
  position: relative;
  text-align: right;
  padding: 1.8rem 0 1.4rem;
  &:before {
    display: block;
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${props => props.theme.colors.light};
    height: 1px;
    width: calc(100% + ${horizontalPadding} * 2);
  }
  button {
    &:first-child {
      margin-right: 2rem;
    }
  }
`;

export const CloseBtn = styled.button``;

//     .modal {
//       a,
//       &__action {
//         color: $blue;
//         font-weight: bold;
//         text-decoration: underline;
//       }

//       &__title,
//       &__body,
//       &__footer {
//         padding: $spacer;
//       }

//       &__body {
//         border-bottom: 1px $gray solid;
//         flex: 1;

//         &__lead {
//           color: rgba($base-font-color, 0.6);
//           font-size: $h3-font-size;
//           font-weight: 900;
//           padding: $spacer 0;
//           text-transform: uppercase;
//         }
//       }

//       &__footer {
//         text-align: right;

//         a {
//           padding: $spacer;
//         }
//       }

//       &__button {
//         box-shadow: none;
//         margin: 0 $spacer;
//         padding: 0.1rem $spacer * 2.7;
//         width: auto;

//         span {
//           font-size: $base-font-size;
//         }
//       }

//       &__action {
//         display: inline-block;
//         font-size: $base-font-size;
//         padding: 0 $spacer;
//       }

//       &__close {
//         $height: 19px;

//         div,
//         svg {
//           height: $height;
//           width: $height;
//         }
//       }

//       &__close,
//       &__action {
//         &:hover {
//           cursor: pointer;
//         }
//       }
//     }
//   }
// }