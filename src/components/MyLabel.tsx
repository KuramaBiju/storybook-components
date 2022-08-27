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
   /**
   * Color personalizado de la fuente
   */
  backgroundColor?:string;
}
export const MyLabel = ({
  label='No label',
  size='normal',
  color='primary',
  allCaps=false,
  fontColor,
  backgroundColor='transparent'}:Props) => {
  return (
    <span
    style={{color:fontColor,backgroundColor}}
    className={`label ${size} text-${color}`}
    >
        {
        allCaps ? label.toUpperCase() : label}
    </span>
  )
}
