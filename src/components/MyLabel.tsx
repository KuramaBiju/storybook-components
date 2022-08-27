import './mylabel.css'

export interface Props{
  /**
   * Este es el mensaje a mostrar en la etiqueta
   */
  label:string;
   /**
   * Este es el tamaño por default del label
   */
  size:'normal'|'h1'|'h2'|'h3';
  /**
   * Este es el color por default
   */
  color?:'primary'|'secondary'|'tertiary';
   /**
   * Este es el allCaps por default
   */
  allCaps?:boolean;
  /**
   * Color personalizado de la fuente
   */
  fontColor?:string;
}
export const MyLabel = ({
  label='No label',
  size='normal',
  color='primary',
  allCaps=false,
  fontColor}:Props) => {
  return (
    <span
    style={{color:fontColor}}
    className={`label ${size} text-${color}`}
    >
        {
        allCaps ? label.toUpperCase() : label}
    </span>
  )
}
