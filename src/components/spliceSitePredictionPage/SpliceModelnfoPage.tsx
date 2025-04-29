"use client";
import React from "react";


export function SpliceModelInfoPage() {
  return (
    <div className="max-w-full mx-auto bg-white dark:bg-[rgba(2,31,53,0.8)] shadow-xl rounded-lg border border-[rgba(2,31,53,0.1)] dark:border-[rgba(255,255,255,0.1)]">

      <div className="p-8 space-y-8">
        {/* Top Section - Model Architecture and Description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Section */}
          <div className="flex flex-col h-full">
            <div className="bg-[rgba(2,31,53,0.03)] flex-1 dark:bg-[rgba(255,255,255,0.05)] p-6 rounded-lg border border-[rgba(2,31,53,0.1)] dark:border-[rgba(255,255,255,0.1)] flex flex-col">
              <div className="flex-1 flex flex-col justify-center">
                <img 
                  src="/splice_site_model_arc.jpg" 
                  alt="Model Architecture"
                  className="w-full object-contain max-h-[400px] rounded-lg shadow-md"
                />
              </div>
              <p className="text-sm text-[#123265] dark:text-gray-400 mt-4 text-center">
                Figure 1: Graphical representation of InterSSPP is used for (A) Splice site prediction and (B) To find patterns that motivate splice sites.
              </p>
            </div>
          </div>

          {/* Model Classification Section */}
          <div className="flex flex-col h-full">
            <div className="bg-[rgba(2,31,53,0.03)] flex-1 dark:bg-[rgba(255,255,255,0.05)] p-6 rounded-lg border border-[rgba(2,31,53,0.1)] dark:border-[rgba(255,255,255,0.1)] flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[rgba(2,31,53,0.1)] dark:bg-[rgba(255,255,255,0.1)] flex items-center justify-center">
                  <span className="text-sm font-medium text-[#123265] dark:text-white">01</span>
                </div>
                <h2 className="text-xl font-semibold text-[#123265] dark:text-white">
                  Model Classification
                </h2>
              </div>
              <div className="flex-1 flex items-center">
                <p className="text-[#123265] text-left dark:text-gray-300 leading-relaxed">
                The proposed convolutional neural network (CNN) architecture is composed of an input layer, followed by three one-dimensional convolutional (1D Conv) layers, two fully connected (dense) layers, and a final output layer. This structure is designed to process fixed-length sequences effectively, particularly in time-series or sequential data contexts.

To mitigate the vanishing gradient problem that can occur in deep networks—where gradients become too small for effective weight updates—we apply the ReLU activation function after each convolutional operation. This introduces non-linearity into the model, promoting more stable and efficient learning.

Each convolutional layer is followed by a dropout layer and a max-pooling layer. Dropout is used as a regularization technique, randomly disabling 20% of neurons during training to prevent overfitting and encourage the network to learn more robust features. Max-pooling, with a pool size of 2, reduces the spatial dimensions of the feature maps, which lowers computational cost while helping the network become invariant to small shifts and distortions.

The first convolutional layer applies 32 filters of size 7 with a stride of 1 and uses 'same' padding to preserve the input dimensions (90 × 5). The output is processed through dropout and pooling layers before continuing to the second and third convolutional layers, which follow the same structure. While the first layer is responsible for capturing global features, subsequent layers extract more localized and detailed patterns.

After the final convolutional layer, the resulting feature maps are flattened into a one-dimensional array, which serves as input to the dense layers. These fully connected layers act like a traditional multilayer perceptron, integrating extracted features for classification.

The network concludes with an output layer containing two neurons, each representing one of the target classes—positive and negative. A softmax activation function is applied to produce class probabilities.

This entire model was implemented using the Keras deep learning library.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[rgba(2,31,53,0.1)] dark:border-[rgba(255,255,255,0.1)] mt-4 p-4">
        <p className="text-sm text-[rgba(2,31,53,0.6)] dark:text-gray-400 text-center">
          For technical inquiries, please contact us
        </p>
      </div>
    </div>
  );
}
