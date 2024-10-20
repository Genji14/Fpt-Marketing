export enum ComboSelectEnum {
    STANDARD = 'standard',
    GAME = 'game',
    HIGHCLASS = 'high-class'

}

export type TComboSelect = {
    type: ComboSelectEnum,
    label: string
}

export const ComboSelectData: TComboSelect[] = [
    {
        label: 'Combo Tiêu Chuẩn',
        type: ComboSelectEnum.STANDARD
    },
    {
        label: 'Combo Game',
        type: ComboSelectEnum.GAME
    }, 
    {
        label: 'Combo High-class',
        type: ComboSelectEnum.HIGHCLASS
    }
]