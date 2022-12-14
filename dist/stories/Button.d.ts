/// <reference types="react" />
import './button.css';
export interface ButtonProps {
    /**
     * Hola mundo primary
     */
    primary?: boolean;
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * How large should the button be?
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Button contents
     */
    label: string;
    /**
     * Optional click handler
     */
    onClick?: () => void;
}
/**
 * Primary UI component for user interaction
 */
export declare const Button: ({ primary, size, backgroundColor, label, ...props }: ButtonProps) => JSX.Element;
