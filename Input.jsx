import { SearchIcon } from '../Icons/SearchIcon';
import classes from './Input.module.css';

export const InputTypes = {
  LOGIN: classes.inputLogin,
  USER: classes.inputUser,
  FILE: classes.inputFile,
  LABEL: classes.inputLabel,
  LABELOUTLINE: classes.inputLabelOutline,
  SEARCH: classes.inputSearch,
  SEARCHLINE: classes.inputSearchLine
};

export const Input = ({
  className = '',
  classNameInput = '',
  value,
  onChange,
  error,
  label,
  inputType = label ? InputTypes.LABEL : '',
  placeholder = ' ',
  isSearch,
  disabled,
  ...otherProps
}) => {
  return (
    <div>
      <div
        className={`${className} ${
          label && !isSearch ? classes.inputLabelContainer : ''
        } ${
          [InputTypes.SEARCH].includes(inputType)
            ? `${classes.inputSearchContainer} ${
                disabled ? classes.inputSearchDisabled : ''
              }`
            : ''
        } ${
          inputType === InputTypes.SEARCHLINE
            ? classes.inputSearchLineContainer
            : ''
        } ${InputTypes.SEARCH_MODAL ? classes.inputSearchModalContainer : ''} ${
          error ? classes.inputErrorContainer : ''
        }`}
      >
        {isSearch && <SearchIcon className={classes.inputSearchIcon} />}
        <input
          className={`${classes.input} ${inputType} ${
            error && !isSearch ? classes.inputError : ''
          } ${classNameInput}`}
          placeholder={placeholder}
          value={value}
          autoComplete="off"
          onChange={onChange}
          disabled={disabled}
          {...otherProps}
        />
        {label && !isSearch && (
          <label
            className={`${
              inputType === InputTypes.LABEL
                ? classes.inputHeading
                : classes.inputHeadingOutline
            }`}
            htmlFor={otherProps.id}
          >
            {label}
          </label>
        )}
      </div>
      {error !== undefined && <p className={classes.error}>{error}</p>}
    </div>
  );
};
