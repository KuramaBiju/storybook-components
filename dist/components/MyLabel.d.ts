/// <reference types="react" />
import './mylabel.css';
export interface Props {
    /**
     * Este es el mensaje a mostrar en la etiqueta
     */
    label: string;
    /**
    * Este es el tamaño por default del label
    */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Este es el color por default
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
    * Este es el allCaps por default
    */
    allCaps?: boolean;
    /**
     * Color personalizado de la fuente
     */
    fontColor?: string;
    /**
    * Color personalizado de la fuente
    */
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, color, allCaps, fontColor, backgroundColor }: Props) => JSX.Element;
