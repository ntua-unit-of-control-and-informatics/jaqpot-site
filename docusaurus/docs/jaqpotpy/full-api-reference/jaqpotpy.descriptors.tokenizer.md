# jaqpotpy.descriptors.tokenizer package

## Submodules

## jaqpotpy.descriptors.tokenizer.smiles_tokenizer module

### *class* jaqpotpy.descriptors.tokenizer.smiles_tokenizer.SmilesVectorizer(charset='@C)(=cOn1S2/H[N]\\\\', pad=10, maxlength=120, startchar='^', endchar='$', unknownchar='?')

Bases: `object`

SMILES vectorizer and devectorizer, with support for SMILES enumeration (atom order randomization)
as data augmentation

* **Parameters:**
  * **charset** – string containing the characters for the vectorization
    can also be generated via the .fit() method
  * **pad** – Length of the vectorization
  * **leftpad** – Add spaces to the left of the SMILES
  * **isomericSmiles** – Generate SMILES containing information about stereogenic centers
  * **augment** – Enumerate the SMILES during transform
  * **canonical** – use canonical SMILES during transform (overrides enum)
  * **binary** – Use RDKit binary strings instead of molecule objects

#### *property* charset

#### fit(smiles, extra_chars=[])

Performs extraction of the charset and length of a SMILES datasets and sets self.maxlength and self.charset

* **Parameters:**
  * **smiles** – Numpy array or Pandas series containing smiles as strings
  * **extra_chars** – List of extra chars to add to the charset (e.g. “\\” when “/” is present)

#### get_dict()

Returns a dictionary representation of the featurizer’s settings and feature sets.

Returns:
: dict: Featurizer configuration and feature sets.

#### load_dict(feat_dict)

Loads settings and feature sets from a dictionary.

Args:
: feat_dict (dict): Dictionary containing featurizer settings and feature sets.

#### *property* maxlength

#### *property* pad

#### reverse_transform(vect, strip=True)

Performs a conversion of a vectorized SMILES to a SMILES strings
charset must be the same as used for vectorization.

* **Parameters:**
  * **vect** – Numpy array of vectorized SMILES.
  * **strip** – Strip start and end tokens from the SMILES string

#### setdims()

Calculates and sets the output dimensions of the vectorized molecules from the current settings

#### transform(smiles)

Perform an enumeration (atom order randomization) and vectorization of a Numpy array of RDkit molecules

* **Parameters:**
  * **mols** – The RDKit molecules to transform in a list or array
  * **augment** – Override the objects .augment setting
  * **canonical** – Override the objects .canonical setting
* **Output:**
  Numpy array with the vectorized molecules with shape [batch, maxlength+pad, charset]

## Module contents
