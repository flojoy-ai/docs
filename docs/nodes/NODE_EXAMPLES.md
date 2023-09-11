---
sidebar_label: All Node Examples
sidebar_position: 0
slug: /nodes/
---

# Flojoy Studio App examples

Apps in Flojoy Studio are comprised of nodes - which are simply Python scripts under-the-hood 

Connect Flojoy nodes together in the Flojoy Studio canvas with drag-and-drop. As you'll see in the examples below, it takes only a few nodes to build powerful DAQ, robotics, data science, or AI apps. Flojoy is the easiets, fastest way for no-code or low-code engineers suchs as mechanical engineers, chemical engineers, aerospace engineers, fluidics engineers, or applied biologists to build powerful, Python-based data pipelines without coding.

[Download Flojoy Studio](/)

Below you will find all nodes that are available out-of-the-box in Flojoy Studio. If you're a proficient Python developer, you can also build your own, custom nodes by [following this guide](/custom-nodes/creating-custom-node/). You can also [contact us](https://www.flojoy.ai/professional-services).

All of the nodes in the examples below are free to use, open-source (MIT licensed), and available on GitHub at https://github.com/flojoy-ai/nodes/.

***

<!-- Custom component -->
import AppThumbnailSection from '@site/src/components/AppThumbnailSection';

# AI & ML

<AppThumbnailSection
    sectionName = 'Classification'
    blockquote = 'No-code Flojoy AI nodes for SVM, one-hot encoding, and more.'
    sectionRoot = 'AI_ML/CLASSIFICATION'
    nodes = {['ACCURACY', 'ONE_HOT_ENCODING', 'SUPPORT_VECTOR_MACHINE', 'TRAIN_TEST_SPLIT']}
/>

<AppThumbnailSection
    sectionName = 'AI-assisted image processing'
    blockquote = 'No-code Flojoy AI nodes for image captioning (ViT + GPT2), object detection (YOLOv3), and image segmentation (DEEPLAB).'
    sectionRoot = 'AI_ML'
    nodes = {['IMAGE_CAPTIONING/NLP_CONNECT_VIT_GPT2', 'OBJECT_DETECTION/OBJECT_DETECTION', 'SEGMENTATION/DEEPLAB_V3']}
/>

<AppThumbnailSection
    sectionName = 'Natural Language Processing (NLP)'
    blockquote = 'No-code Flojoy AI nodes for text processing and NLP.'
    sectionRoot = 'AI_ML'
    nodes = {['NLP/COUNT_VECTORIZER', 'TEXT_SUMMARIZATION/BART_LARGE_CNN']}
/>

<AppThumbnailSection
    sectionName = 'Predictive analytics'
    blockquote = 'No-code Flojoy AI nodes for predictive analytics.'
    sectionRoot = 'AI_ML'
    nodes = {['PREDICT_TIME_SERIES/PROPHET_PREDICT', 'REGRESSION/LEAST_SQUARES']}
/>

# ETL - Extractors

<AppThumbnailSection
    sectionName = 'Local files'
    blockquote = 'No-code Flojoy nodes for extracting data from local files on disk.'
    sectionRoot = 'EXTRACTORS/FILE'
    nodes = {['OPEN_IMAGE', 'OPEN_PARQUET', 'READ_CSV', 'READ_S3']}
/>

<AppThumbnailSection
    sectionName = 'Dataframes'
    blockquote = 'AFlojoy nodes for extracting a subset of columns from an in-memory dataframe.'
    sectionRoot = 'EXTRACTORS/DATAFRAME'
    nodes = {['EXTRACT_COLUMNS']}
/>

# ETL - Transformers

<AppThumbnailSection
    sectionName = 'Arithmetic'
    blockquote = 'No-code Flojoy nodes for basic arithmetic operations (eg addition, substraction, division, multiplication). Arithmetic nodes are applicable to DataContainers of types scalar, vector, matrix, and dataframe.'
    sectionRoot = 'TRANSFORMERS/ARITHMETIC'
    nodes = {['ABS', 'ADD', 'SUBTRACT', 'MULTIPLY', 'DIVIDE']}
/>

<AppThumbnailSection
    sectionName = 'Calculus'
    blockquote = 'No-code Flojoy nodes for basic calculus operations like differentiation and multiplication. Calculus nodes are applicable to DataContainers of types vector, matrix, and dataframe.'
    sectionRoot = 'TRANSFORMERS/CALCULUS'
    nodes = {['DIFFERENTIATE', 'INTEGRATE', 'DOUBLE_DEFINITE_INTEGRAL', 'DOUBLE_INDEFINITE_INTEGRAL']}
/>

<AppThumbnailSection
    sectionName = 'Image processing'
    blockquote = 'No-code Flojoy nodes for Python-based image processing, including nodes for RGB channel splitting, edge detection, and smoothing.'
    sectionRoot = 'TRANSFORMERS/IMAGE_PROCESSING'
    nodes = {['CHANNEL_MERGE', 'CHANNEL_SPLIT', 'EDGE_DETECTION', 'EXTREMA_DETERMINATION', 'IMAGE_SMOOTHING', 'REGION_PROPERTIES']}
/>

<AppThumbnailSection
    sectionName = 'Matrix manipulation'
    blockquote = 'No-code Flojoy nodes for Python-based matrix manipulation, including matrix inverstion and matrix product.'
    sectionRoot = 'TRANSFORMERS/MATRIX_MANIPULATION'
    nodes = {['INVERT', 'MATMUL']}
/>

<AppThumbnailSection
    sectionName = 'Digital signal processing (DSP)'
    blockquote = 'Flojoy nodes for Python-based DSP. Connect DSP nodes together on the Flojoy Studio canvas to create DSP data pipelines similar to Simulink or LabVIEW.'
    sectionRoot = 'TRANSFORMERS/SIGNAL_PROCESSING'
    nodes = {['BUTTER', 'FFT', 'FIR', 'IFFT', 'SAVGOL', 'TWO_DIMENSIONAL_FFT']}
/>

<AppThumbnailSection
    sectionName = 'Type casting'
    blockquote = 'Use these nodes to convert one DataContainer type to another.'
    sectionRoot = 'TRANSFORMERS/TYPE_CASTING'
    nodes = {['DF_2_NP', 'DF_2_ORDERED_TRIPLE', 'MAT_2_DF', 'NP_2_DF', 'ORDERED_TRIPLE_2_SURFACE', 'TWO_DIMENSIONAL_FFT']}
/>

<AppThumbnailSection
    sectionName = 'Select'
    blockquote = 'Select subsets from structured, indexable data such as vectors (arrays), matrices, and json.'
    sectionRoot = 'TRANSFORMERS/SELECT_ARRAY'
    nodes = {['SELECT_ARRAY']}
/>

# ETL - Loaders

<AppThumbnailSection
    sectionName = 'Cloud databases'
    blockquote = 'No-code Flojoy ETL nodes for retrieving and saving engineering data to and from cloud data storage.'
    sectionRoot = 'LOADERS/CLOUD_DATABASE'
    nodes = {['FLOJOY_CLOUD_DOWNLOAD', 'FLOJOY_CLOUD_UPLOAD']}
/>

<AppThumbnailSection
    sectionName = 'Flojoy Studio internal memory'
    blockquote = "A node for caching app data to Flojoy Studio's internal memory space."
    sectionRoot = 'LOADERS/INTERNAL_MEMORY'
    nodes = {['DS_LOAD']}
/>

<AppThumbnailSection
    sectionName = 'Local file system'
    blockquote = 'No-code Flojoy nodes for reading and writing data files to and from disk.'
    sectionRoot = 'LOADERS/LOCAL_FILE_SYSTEM'
    nodes = {['BATCH_PROCESSOR', 'LOCAL_FILE', 'OPEN_MATLAB']}
/>

# Logic

<AppThumbnailSection
    sectionName = 'Conditionals'
    blockquote = 'A no-code Flojoy logic nodes for "if statements." Use this node to make the execution flow of a Flojoy app conditional on a True/False statement.'
    sectionRoot = 'LOGIC_GATES/CONDITIONALS'
    nodes = {['CONDITIONAL']}
/>

<AppThumbnailSection
    sectionName = 'Loops'
    blockquote = 'No-code Flojoy logic nodes for "loops." Use these nodes to execute a collection of nodes a desired number of times.'
    sectionRoot = 'LOGIC_GATES'
    nodes = {['LOOPS/APPEND', 'LOOPS/LOOP', 'LOOP_TOOLS/BREAK', 'LOOP_TOOLS/LOOP_INDEX']}
/>

<AppThumbnailSection
    sectionName = 'Timers'
    blockquote = 'A time node introducing delays in between Flojoy node execution.'
    sectionRoot = 'TIMERS'
    nodes = {['TIMER']}
/>

# Visualizers

<AppThumbnailSection
    sectionName = 'Data structure visualization'
    blockquote = 'Visually review DataContainer data structures as they flow through Flojoy apps.'
    sectionRoot = 'VISUALIZERS/DATA_STRUCTURE'
    nodes = {['ARRAY_VIEW', 'MATRIX_VIEW', 'TEXT_VIEW']}
/>

<AppThumbnailSection
    sectionName = 'Plotly'
    blockquote = 'Create scientific and engineering data visualizations with the Plotly charting library.'
    sectionRoot = 'VISUALIZERS/PLOTLY'
    nodes = {['BAR', 'BIG_NUMBER', 'COMPOSITE', 'HEATMAP', 'HISTOGRAM', 'IMAGE', 'LINE', 'PROPHET_COMPONENTS', 'PROPHET_PLOT', 'SCATTER', 'SCATTER3D', 'SURFACE3D', 'TABLE']}
/>

# NumPy

<AppThumbnailSection
    sectionName = 'np.linalg'
    blockquote = 'np.linalg (numpy linear algebra) routines that have been wrapped as Flojoy nodes for drag-and-drop integration in Flojoy apps.'
    sectionRoot = 'NUMPY/LINALG'
    nodes = {['CHOLESKY', 'DET', 'EIG', 'EIGH', 'EIGVALS', 'EIGVALSH', 'INV', 'MATRIX_POWER', 'PINV' , 'QR', 'SLODGET', 'SVD', 'TENSORINV']}
/>

# SciPy

<AppThumbnailSection
    sectionName = 'scipy.signal'
    blockquote = 'scipy.signal Python routines that have been wrapped as Flojoy nodes for drag-and-drop integration in Flojoy apps.'
    sectionRoot = 'SCIPY/SIGNAL'
    nodes = {['ARGRELMAX', 'ARGRELMIN', 'BSPLINE', 'CUBIC', 'DECIMATE', 'DETREND', 'GAUSS_SPLINE', 'HILBERT', 'KAISER_BETA' , 'PERIODOGRAM', 'QUADRATIC', 'SAVGOL_FILTER', 'STFT', 'WELCH']}
/>

<AppThumbnailSection
    sectionName = 'scipy.stats'
    blockquote = 'scipy.stats Python routines that have been wrapped as Flojoy nodes for drag-and-drop integration in Flojoy apps.'
    sectionRoot = 'SCIPY/STATS'
    nodes = {['ANDERSON', 'BAYES_MVS', 'BINOM_TEST', 'GSTD', 'GZSCORE', 'JARQUE_BERA', 'KURTOSIS', 'KURTOSISTEST', 'MOMENT', 'MVSDIST', 'NORMALTEST', 'SEM', 'SHAPIRO', 'SIGMACLIP', 'SKEW', 'SKEWTEST', 'TMAX', 'TMIN', 'TRIM1', 'TRIMBOTH', 'TRIM_MEAN', 'TTEST_1SAMP', 'VARIATION', 'YEOJOHNSON', 'ZSCORE']}
/>


