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
    blockquote = 'No-code Flojoy AI nodes for image captioning (ViT + GPT2), image classification (Hugging Face pipeline), object detection (YOLOv3), and image segmentation (DEEPLAB).'
    sectionRoot = 'AI_ML'
    nodes = {['IMAGE_CAPTIONING/NLP_CONNECT_VIT_GPT2', 'IMAGE_CLASSIFICATION/HUGGING_FACE_PIPELINE', 'OBJECT_DETECTION/OBJECT_DETECTION', 'SEGMENTATION/DEEPLAB_V3']}
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

## ETL - Extractors examples

Here you can find a list of all the Flojoy ETL nodes extract data from a remote or local data source for use within Flojoy apps.

If interested in Flojoy's ETL capabilities, please also see the [Extractor](/nodes/EXTRACTORS/) and [Transformer](/nodes/TRANSFORMERS/) nodes.

You can also find all of these nodes in the sidebar.

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

## ETL - Transformer examples

Here you can find a list of all the Flojoy ETL nodes that can transform input data.

Data in Flojoy is passed between nodes inside [DataContainers](https://docs.flojoy.ai/custom-nodes/data-container/). Transformer nodes can be used to convert one DataContainer type to another, perform mathematical operations on the data within a DataContainer, and much more.

You can also find all of these nodes in the sidebar.

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
    blockquote = 'No-code Flojoy nodes for Python-based matrix manipulation, including matrix multiplication, inverstion and product.'
    sectionRoot = 'TRANSFORMERS/MATRIX_MANIPULATION'
    nodes = {['DOT_PRODUCT', 'INVERT', 'MATMUL']}
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

<AppThumbnailSection
    sectionName = 'Vector manipulation'
    blockquote = 'No-code Flojoy nodes for Python-based vector manipulation, such as determining the vector length and value at a requested index.'
    sectionRoot = 'TRANSFORMERS/VECTOR_MANIPULATION'
    nodes = {['VECTOR_INDEXING', 'VECTOR_LENGTH']}
/>

## ETL - Loaders examples

Here you can find information about all the no-code Flojoy ETL nodes that load data to a remote or local data store.

If interested in Flojoy's ETL capabilities, please also see the [Extractor](/nodes/EXTRACTORS/) and [Transformer](/nodes/TRANSFORMERS/) nodes.

You can also find all of these nodes in the sidebar.

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

<AppThumbnailSection
    sectionName = 'Remote file system'
    blockquote = 'No-code Flojoy nodes for reading and writing data files to and from remote.'
    sectionRoot = 'LOADERS/REMOTE_FILE_SYSTEM'
    nodes = {['REMOTE_FILE']}
/>

## Logic expression examples

Here you can find information about all the Flojoy nodes that can be used as logic gates to control the execution flow of Flojoy nodes.

You can also find all of these nodes in the sidebar.

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

## Visualizer examples

Here you can find information about all the Flojoy nodes that can be used to visualize your data.

You can also find all of these nodes in the sidebar.

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

## Generator examples

Generator nodes can be used to generate synthetic data for your Flojoy apps if you do not have data readily on-hand or are creating a Python-based simulation.

You can also find all of these nodes in the sidebar.

<AppThumbnailSection
    sectionName = 'Sample datasets'
    blockquote = 'Flojoy nodes that output sample datasets for rapidly creating and testing Flojoy apps. Use these nodes as inputs to AI & ML nodes, image processing nodes, and others.'
    sectionRoot = 'GENERATORS'
    nodes = {['SAMPLE_DATASETS/PLOTLY_DATASET', 'SAMPLE_DATASETS/R_DATASET', 'SAMPLE_DATASETS/TEXT_DATASET', 'SAMPLE_IMAGES/SKIMAGE']}
/>

<AppThumbnailSection
    sectionName = 'Simulation'
    blockquote = 'Flojoy nodes that output simulation data such as waveforms, scalars (constants), and empty matrices.'
    sectionRoot = 'GENERATORS/SIMULATIONS'
    nodes = {['BASIC_OSCILLATOR', 'CONSTANT', 'FEEDBACK', 'LINSPACE', 'MATRIX', 'RAND', 'SCALAR', 'SECOND_ORDER_SYSTEM', 'SINE', 'TEXT', 'TIMESERIES', 'WAVEPACKET']}
/>

## Instrument examples

Here you can find a list of all the Flojoy nodes that can be used with instruments, motor drivers, analog sensors, and other hardware devices.

You can also find all of these nodes in the sidebar.

<AppThumbnailSection
    sectionName = 'Instruments'
    blockquote = 'Flojoy nodes for connecting to benchtop scientific instruments and cameras.'
    sectionRoot = 'INSTRUMENTS'
    nodes = {['KEITHLEY/KEITHLEY2400', 'LABJACK/LABJACKU3', 'MOCK/MOCK_WEINSCHEL8320', 'PHIDGET/PHIDGET22', 'QCODES/CLOSE_ALL', 'WEB_CAM/CAMERA']}
/>

<AppThumbnailSection
    sectionName = 'Serial protocol'
    blockquote = 'Flojoy nodes for connecting to hardware through the USB or RS-232 serial ports.'
    sectionRoot = 'INSTRUMENTS'
    nodes = {['SERIAL_SINGLE_MEASUREMENT', 'SERIAL_TIMESERIES']}
/>

<AppThumbnailSection
    sectionName = 'Motor control'
    blockquote = 'Flojoy nodes for connecting to motor drivers and precision control of motor movement.'
    sectionRoot = 'INSTRUMENTS/STEPPER_MOTOR'
    nodes = {['STEPPER_DRIVER_TIC', 'STEPPER_DRIVER_TIC_KNOB']}
/>

## NumPy examples

Here you can find information about all the Flojoy nodes that can be used for NumPy functions.

You can also find all of these nodes in the sidebar.

<AppThumbnailSection
    sectionName = 'np.linalg'
    blockquote = 'np.linalg (numpy linear algebra) routines that have been wrapped as Flojoy nodes for drag-and-drop integration in Flojoy apps.'
    sectionRoot = 'NUMPY/LINALG'
    nodes = {['CHOLESKY', 'DET', 'EIG', 'EIGH', 'EIGVALS', 'EIGVALSH', 'INV', 'MATRIX_POWER', 'PINV' , 'QR', 'SLODGET', 'SVD', 'TENSORINV']}
/>

## SciPy examples

Here you can find information about all the Flojoy nodes that can be used for SciPy functions.

You can also find all of these nodes in the sidebar.

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
